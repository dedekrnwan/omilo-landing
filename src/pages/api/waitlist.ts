export const prerender = false;

import type { APIRoute } from 'astro';

const VALID_INTEREST = ['self-host', 'managed', 'exploring'] as const;
type Interest = (typeof VALID_INTEREST)[number];

function isValidInterest(value: unknown): value is Interest {
  return VALID_INTEREST.includes(value as Interest);
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

/**
 * Escape Slack mrkdwn / Block Kit text fields.
 * Required escapes per Slack docs: & < >
 * Also strips/neutralizes formatting characters that could alter message rendering.
 */
function escapeSlack(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/[*_~`]/g, '');
}

export const POST: APIRoute = async ({ request }) => {
  // Reject non-JSON content types.
  const ct = request.headers.get('content-type') ?? '';
  if (!ct.includes('application/json')) {
    return json({ ok: false, error: 'Content-Type must be application/json' }, 400);
  }

  // Cap body size at 8 KB.
  const raw = await request.text();
  if (raw.length > 8192) {
    return json({ ok: false, error: 'Request body too large' }, 400);
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400);
  }

  const { name, email, company, interest, website } = body as {
    name?: string;
    email?: string;
    company?: string;
    interest?: string;
    website?: string; // honeypot
  };

  // Honeypot: bots fill this field, humans leave it empty.
  if (website) {
    return json({ ok: true });
  }

  // Server-side validation.
  if (!name || String(name).trim() === '') {
    return json({ ok: false, error: 'Name is required' }, 400);
  }
  if (!email || String(email).trim() === '') {
    return json({ ok: false, error: 'Email is required' }, 400);
  }
  // Validate email format.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())) {
    return json({ ok: false, error: 'Invalid email format' }, 400);
  }
  // Validate interest if provided.
  if (interest !== undefined && interest !== '' && !isValidInterest(interest)) {
    return json({ ok: false, error: 'Invalid interest value' }, 400);
  }

  const webhookUrl = import.meta.env.SLACK_WEBHOOK_URL as string | undefined;
  if (!webhookUrl) {
    console.warn('[waitlist] SLACK_WEBHOOK_URL not configured — skipping Slack notification');
    return json({ ok: true, note: 'slack not configured' });
  }

  // C1: Validate webhook URL is a legitimate Slack endpoint before fetching it.
  if (!webhookUrl.startsWith('https://hooks.slack.com/')) {
    console.error('[waitlist] SLACK_WEBHOOK_URL is set but does not point to hooks.slack.com — refusing to fetch arbitrary URL');
    return json({ ok: false, error: 'Server configuration error' }, 502);
  }

  const ts = new Date().toISOString();
  // C2: Escape all free-text user fields before interpolating into mrkdwn.
  const nameEsc = escapeSlack(String(name).trim());
  const emailEsc = escapeSlack(String(email).trim());
  const companyDisplay = company && String(company).trim() ? escapeSlack(String(company).trim()) : '-';
  const interestDisplay = interest && String(interest).trim() ? escapeSlack(String(interest).trim()) : '-';

  const blocks = [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: 'Saga OS Waitlist',
        emoji: false,
      },
    },
    {
      type: 'section',
      fields: [
        { type: 'mrkdwn', text: `*Name*\n${nameEsc}` },
        { type: 'mrkdwn', text: `*Email*\n${emailEsc}` },
        { type: 'mrkdwn', text: `*Company*\n${companyDisplay}` },
        { type: 'mrkdwn', text: `*Interest*\n${interestDisplay}` },
      ],
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: `Source: Saga OS Landing - Waitlist | ${ts}`,
        },
      ],
    },
  ];

  try {
    const slackRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blocks }),
    });
    if (!slackRes.ok) {
      console.error('[waitlist] Slack returned', slackRes.status);
      return json({ ok: false, error: 'Failed to send notification, please try again' }, 502);
    }
  } catch (err) {
    console.error('[waitlist] Slack fetch error:', err);
    return json({ ok: false, error: 'Failed to send notification, please try again' }, 502);
  }

  return json({ ok: true });
};
