/**
 * Build smoke test: assert that `astro build` succeeds.
 *
 * Strategy: run `astro build` as a child process and assert exit code 0.
 * This is cheaper than spinning up a dev server and avoids port collisions.
 */

import assert from 'node:assert/strict';
import { test } from 'node:test';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

const PROJECT_ROOT = resolve(new URL('.', import.meta.url).pathname, '..');

function runBuild() {
  return new Promise((res, rej) => {
    const child = spawn(
      process.execPath,
      [resolve(PROJECT_ROOT, 'node_modules/astro/bin/astro.mjs'), 'build', '--silent'],
      {
        cwd: PROJECT_ROOT,
        stdio: ['ignore', 'pipe', 'pipe'],
        env: { ...process.env, NODE_ENV: 'production' },
      },
    );

    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });

    child.on('close', (code) => {
      res({ code, stdout, stderr });
    });
    child.on('error', rej);
  });
}

test('astro build succeeds', async () => {
  const { code, stderr } = await runBuild();
  if (code !== 0) {
    console.error('--- astro build stderr ---\n', stderr);
  }
  assert.equal(code, 0, `astro build exited with code ${code}.\n${stderr}`);
}, { timeout: 120_000 });
