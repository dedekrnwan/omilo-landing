import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

const host = '127.0.0.1';
const port = 4331;
const origin = `http://${host}:${port}`;
let server;

before(async () => {
  server = spawn(
    process.execPath,
    [resolve('node_modules/astro/bin/astro.mjs'), 'dev', '--host', host, '--port', String(port), '--ignore-lock'],
    { detached: true, stdio: ['ignore', 'pipe', 'pipe'] },
  );

  let stderr = '';
  server.stderr.on('data', (chunk) => {
    stderr += chunk;
  });

  for (let attempt = 0; attempt < 50; attempt += 1) {
    if (server.exitCode !== null) {
      throw new Error(`Astro exited before startup:\n${stderr}`);
    }

    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {
      // Server is still starting.
    }

    await new Promise((resolveDelay) => setTimeout(resolveDelay, 100));
  }

  throw new Error(`Astro did not start within 5 seconds:\n${stderr}`);
});

after(() => {
  if (!server?.pid) return;
  try {
    process.kill(-server.pid, 'SIGTERM');
  } catch (error) {
    if (error.code !== 'ESRCH') throw error;
  }
});

test('GET / returns 200 with complete Saga OS SEO metadata', async () => {
  const response = await fetch(origin);
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.ok(html.includes('<html lang="en"'), 'Expected <html lang="en" in the response');
  assert.ok(
    html.includes('<meta property="og:site_name" content="Saga OS">'),
    'Missing og:site_name "Saga OS"',
  );
  assert.ok(
    html.includes('<meta property="og:locale" content="en_US">'),
    'Missing og:locale "en_US"',
  );
  assert.ok(
    html.includes('/og/social-preview.png'),
    'Missing og:image with /og/social-preview.png',
  );
  assert.ok(
    html.includes('<meta name="twitter:card" content="summary_large_image">'),
    'Missing twitter:card "summary_large_image"',
  );
});
