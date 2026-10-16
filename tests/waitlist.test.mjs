/**
 * waitlist.test.mjs — server-harness tests for POST /api/waitlist
 *
 * Spawns TWO Astro dev server instances:
 *   port 4333 — no SLACK_WEBHOOK_URL set (normal path)
 *   port 4335 — SLACK_WEBHOOK_URL=https://evil.example.com set (bad-webhook path)
 *
 * Tests:
 *   (a) non-JSON content-type → 400
 *   (b) valid JSON missing email → 400 {ok:false}
 *   (c) honeypot website filled → 200 {ok:true} (no throw)
 *   (d) valid {name,email} with SLACK_WEBHOOK_URL unset → 200 {ok:true}
 *   (e) valid {name,email} with SLACK_WEBHOOK_URL=https://evil.example.com → 502
 */

import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

// ---------------------------------------------------------------------------
// Server helpers
// ---------------------------------------------------------------------------

const host = '127.0.0.1';

/**
 * Spawn an Astro dev server and wait for it to become reachable.
 * Returns the child process handle.
 */
async function spawnServer(port, extraEnv = {}) {
  const child = spawn(
    process.execPath,
    [
      resolve('node_modules/astro/bin/astro.mjs'),
      'dev',
      '--host', host,
      '--port', String(port),
      '--ignore-lock',
    ],
    {
      detached: true,
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, ...extraEnv },
    },
  );

  let stderr = '';
  child.stderr.on('data', (chunk) => { stderr += chunk; });

  const origin = `http://${host}:${port}`;
  for (let attempt = 0; attempt < 80; attempt += 1) {
    if (child.exitCode !== null) {
      throw new Error(`Astro exited before startup (port ${port}):\n${stderr}`);
    }
    try {
      const res = await fetch(`${origin}/`);
      if (res.ok || res.status === 404) return child; // server is up
    } catch {
      // Still starting.
    }
    await new Promise((r) => setTimeout(r, 200));
  }

  throw new Error(`Astro did not start within 16 seconds (port ${port}):\n${stderr}`);
}

function killServer(child) {
  if (!child?.pid) return;
  try {
    process.kill(-child.pid, 'SIGTERM');
  } catch (err) {
    if (err.code !== 'ESRCH') throw err;
  }
}

// ---------------------------------------------------------------------------
// Server instances
// ---------------------------------------------------------------------------

let serverNormal;     // port 4333, no SLACK_WEBHOOK_URL
let serverBadWebhook; // port 4335, SLACK_WEBHOOK_URL=https://evil.example.com

const normalOrigin = `http://${host}:4333`;
const badOrigin = `http://${host}:4335`;

before(async () => {
  [serverNormal, serverBadWebhook] = await Promise.all([
    spawnServer(4333, {}),
    spawnServer(4335, { SLACK_WEBHOOK_URL: 'https://evil.example.com' }),
  ]);
});

after(() => {
  killServer(serverNormal);
  killServer(serverBadWebhook);
});

// ---------------------------------------------------------------------------
// Helper: POST /api/waitlist
// ---------------------------------------------------------------------------

async function postWaitlist(origin, body, extraHeaders = {}) {
  return fetch(`${origin}/api/waitlist`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...extraHeaders },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

// (a) Non-JSON content-type → 400
test('(a) POST /api/waitlist with non-JSON content-type returns 400', async () => {
  const res = await fetch(`${normalOrigin}/api/waitlist`, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: 'name=Alice&email=alice@example.com',
  });
  assert.equal(res.status, 400, `Expected 400, got ${res.status}`);
  const data = await res.json();
  assert.equal(data.ok, false, 'Expected ok:false');
});

// (b) Valid JSON missing email → 400 {ok:false}
test('(b) POST /api/waitlist with missing email returns 400 {ok:false}', async () => {
  const res = await postWaitlist(normalOrigin, { name: 'Alice' });
  assert.equal(res.status, 400, `Expected 400, got ${res.status}`);
  const data = await res.json();
  assert.equal(data.ok, false, 'Expected ok:false');
});

// (c) Honeypot website filled → 200 {ok:true} (no throw)
test('(c) POST /api/waitlist with honeypot filled returns 200 {ok:true}', async () => {
  const res = await postWaitlist(normalOrigin, {
    name: 'Bot',
    email: 'bot@example.com',
    website: 'http://spam.example.com',
  });
  assert.equal(res.status, 200, `Expected 200, got ${res.status}`);
  const data = await res.json();
  assert.equal(data.ok, true, 'Expected ok:true');
});

// (d) Valid {name,email} with SLACK_WEBHOOK_URL unset → 200 {ok:true}
test('(d) POST /api/waitlist valid payload, SLACK_WEBHOOK_URL unset → 200 {ok:true}', async () => {
  const res = await postWaitlist(normalOrigin, {
    name: 'Alice',
    email: 'alice@example.com',
  });
  assert.equal(res.status, 200, `Expected 200, got ${res.status}`);
  const data = await res.json();
  assert.equal(data.ok, true, 'Expected ok:true');
});

// (e) SLACK_WEBHOOK_URL=https://evil.example.com → 502
test('(e) POST /api/waitlist with non-Slack webhook URL returns 502', async () => {
  const res = await postWaitlist(badOrigin, {
    name: 'Alice',
    email: 'alice@example.com',
  });
  assert.equal(res.status, 502, `Expected 502, got ${res.status}`);
  const data = await res.json();
  assert.equal(data.ok, false, 'Expected ok:false');
});
