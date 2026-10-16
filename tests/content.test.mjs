import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const enPath = resolve('src/data/content.en.ts');
const idPath = resolve('src/data/content.id.ts');

const enSource = readFileSync(enPath, 'utf8');
const idSource = readFileSync(idPath, 'utf8');

// Pull the top-level keys of the `content` object out of a content module.
// Matches two-space-indented `key:` lines, which is how the content objects are
// authored, so only the section keys at depth one are captured.
function topLevelContentKeys(source) {
  const start = source.indexOf('export const content');
  assert.notEqual(start, -1, 'content module must export a `content` const');
  const body = source.slice(start);
  const keys = new Set();
  for (const match of body.matchAll(/^ {2}([a-zA-Z][a-zA-Z0-9]*):/gm)) {
    keys.add(match[1]);
  }
  return keys;
}

test('neither content file contains an em dash', () => {
  assert.ok(!enSource.includes('—'), 'content.en.ts must not contain an em dash');
  assert.ok(!idSource.includes('—'), 'content.id.ts must not contain an em dash');
});

test('neither content file mentions Hermes', () => {
  assert.ok(!enSource.includes('Hermes'), 'content.en.ts must not mention Hermes');
  assert.ok(!idSource.includes('Hermes'), 'content.id.ts must not mention Hermes');
});

test('both content files declare the same top-level section keys', () => {
  const enKeys = topLevelContentKeys(enSource);
  const idKeys = topLevelContentKeys(idSource);

  const required = [
    'meta',
    'nav',
    'hero',
    'loop',
    'helpers',
    'workspace',
    'guardrails',
    'engines',
    'offer',
    'growth',
    'finalCta',
    'footer',
    'waitlist',
  ];

  for (const key of required) {
    assert.ok(enKeys.has(key), `content.en.ts is missing required section: ${key}`);
    assert.ok(idKeys.has(key), `content.id.ts is missing required section: ${key}`);
  }

  const enSorted = [...enKeys].sort();
  const idSorted = [...idKeys].sort();
  assert.deepEqual(enSorted, idSorted, 'EN and ID must declare the same top-level section keys');
});

test('no content file mentions Sahabat Warga or the old Saga OS brand', () => {
  for (const [name, src] of [['en', enSource], ['id', idSource]]) {
    assert.ok(!src.includes('Sahabat Warga'), `content.${name}.ts must not mention Sahabat Warga`);
    assert.ok(!src.includes('Saga OS'), `content.${name}.ts must use the Omilo brand`);
  }
});
