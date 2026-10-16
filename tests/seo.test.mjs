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

test('social preview is a 1200 by 630 PNG', async () => {
  const response = await fetch(`${origin}/og/social-preview.png`);
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type') ?? '', /^image\/png(?:;|$)/);

  const image = Buffer.from(await response.arrayBuffer());
  // PNG signature
  assert.deepEqual([...image.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
  // IHDR: width at offset 16, height at offset 20 (big-endian uint32)
  assert.equal(image.readUInt32BE(16), 1200);
  assert.equal(image.readUInt32BE(20), 630);
});

test('GET / returns 200 with complete Omilo SEO metadata', async () => {
  const response = await fetch(origin);
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.ok(html.includes('<html lang="en"'), 'Expected <html lang="en" in the response');
  assert.ok(
    html.includes('<meta property="og:site_name" content="Omilo">'),
    'Missing og:site_name "Omilo"',
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
