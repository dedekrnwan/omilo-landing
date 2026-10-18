/**
 * pages.test.mjs — server-harness integration tests for the EN and ID homepages.
 *
 * Strategy: spawn a single Astro dev server on port 4334 and hit both routes.
 * Each test asserts:
 *   - GET / → 200, correct EN hero headline, all 10 section anchor ids present
 *   - GET /id/ → 200, correct ID hero headline, all 10 section anchor ids present
 *   - /id/ HTML does NOT contain the EN hero headline (no locale fallback leak)
 *
 * Note: Hero has no anchor id, so SECTION_IDS has 10 entries (Hero has no anchor).
 */

import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

const host = '127.0.0.1';
const port = 4334;
const origin = `http://${host}:${port}`;

// Known headline substrings pulled directly from the content files.
const EN_HERO_HEADLINE = 'Grow your business';
const ID_HERO_HEADLINE = 'Kembangkan bisnis Anda';

// All section anchor ids that must appear in every locale's page.
const SECTION_IDS = [
  'demo',
  'growth',
  'loop',
  'helpers',
  'examples',
  'connectors',
  'workspace',
  'guardrails',
  'engines',
  'offer',
  'final-cta',
];

// ---------------------------------------------------------------------------
// Server lifecycle
// ---------------------------------------------------------------------------

let server;

before(async () => {
  server = spawn(
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
    },
  );

  let stderr = '';
  server.stderr.on('data', (chunk) => { stderr += chunk; });

  for (let attempt = 0; attempt < 80; attempt += 1) {
    if (server.exitCode !== null) {
      throw new Error(`Astro exited before startup:\n${stderr}`);
    }
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {
      // Server still starting.
    }
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 100));
  }

  throw new Error(`Astro did not start within 8 seconds:\n${stderr}`);
});

after(() => {
  if (!server?.pid) return;
  try {
    process.kill(-server.pid, 'SIGTERM');
  } catch (error) {
    if (error.code !== 'ESRCH') throw error;
  }
});

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

test('GET / returns 200 with EN hero headline and all section ids', async () => {
  const response = await fetch(origin + '/');
  assert.equal(response.status, 200, 'Expected GET / to return 200');

  const html = await response.text();

  assert.ok(
    html.includes(EN_HERO_HEADLINE),
    `Expected EN hero headline in GET / response: "${EN_HERO_HEADLINE}"`,
  );

  for (const id of SECTION_IDS) {
    assert.ok(
      html.includes(`id="${id}"`),
      `Expected section id="${id}" in GET / HTML`,
    );
  }

  // Confirm a <main> element is present.
  assert.ok(html.includes('<main'), 'Expected <main> element in GET / HTML');
});

test('GET /id/ returns 200 with ID hero headline and all section ids', async () => {
  const response = await fetch(origin + '/id/');
  assert.equal(response.status, 200, 'Expected GET /id/ to return 200');

  const html = await response.text();

  assert.ok(
    html.includes(ID_HERO_HEADLINE),
    `Expected ID hero headline in GET /id/ response: "${ID_HERO_HEADLINE}"`,
  );

  for (const id of SECTION_IDS) {
    assert.ok(
      html.includes(`id="${id}"`),
      `Expected section id="${id}" in GET /id/ HTML`,
    );
  }

  assert.ok(html.includes('<main'), 'Expected <main> element in GET /id/ HTML');
});

test('GET /id/ HTML does not contain the EN hero headline (no fallback leak)', async () => {
  const response = await fetch(origin + '/id/');
  assert.equal(response.status, 200, 'Expected GET /id/ to return 200');

  const html = await response.text();

  assert.ok(
    !html.includes(EN_HERO_HEADLINE),
    `EN hero headline must NOT appear in GET /id/ HTML (locale leak detected)`,
  );
});
