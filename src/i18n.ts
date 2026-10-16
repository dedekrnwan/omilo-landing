// Locale resolution and locale-aware path building for the landing page.
// EN is the default locale and lives at the root. ID lives under the /id/ prefix.

import type { Content } from './data/types';
import { content as contentEn } from './data/content.en';
import { content as contentId } from './data/content.id';

export type Locale = 'en' | 'id';

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALES: Locale[] = ['en', 'id'];

const contentByLocale: Record<Locale, Content> = {
  en: contentEn,
  id: contentId,
};

export function getContent(locale: Locale): Content {
  return contentByLocale[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'id' : 'en';
}

// Map a path authored in the EN (root) form to the requested locale.
// EN keeps the path as-is. ID prefixes it with /id. The input is treated as the
// EN form, so any existing /id prefix is stripped first to stay idempotent.
//
//   localizePath('/', 'en')      === '/'
//   localizePath('/', 'id')      === '/id/'
//   localizePath('/pricing', id) === '/id/pricing'
export function localizePath(path: string, locale: Locale): string {
  const normalized = stripLocalePrefix(path);

  if (locale === 'en') {
    return normalized;
  }

  // ID: '/' becomes '/id/', everything else gets a leading '/id'.
  return normalized === '/' ? '/id/' : `/id${normalized}`;
}

function stripLocalePrefix(path: string): string {
  if (path === '/id' || path === '/id/') {
    return '/';
  }
  if (path.startsWith('/id/')) {
    return path.slice('/id'.length);
  }
  return path;
}
