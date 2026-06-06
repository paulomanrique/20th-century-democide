export type Lang = 'pt' | 'en' | 'es' | 'fr' | 'it' | 'de' | 'zh' | 'ja';

export const DEFAULT_LANG: Lang = 'pt';

export const LANGUAGES: { code: Lang; name: string }[] = [
  { code: 'pt', name: 'Português' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'it', name: 'Italiano' },
  { code: 'de', name: 'Deutsch' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
];

import { nav } from './strings/nav';
import { footer } from './strings/footer';
import { home } from './strings/home';
import { cards } from './strings/cards';
import { common } from './strings/common';
import { author } from './strings/author';
import { thesis } from './strings/thesis';
import { democides } from './strings/democides';
import { nazism } from './strings/nazism';
import { socialism } from './strings/socialism';
import { colonialism } from './strings/colonialism';
import { dictatorships } from './strings/dictatorships';
import { preservation } from './strings/preservation';
import { trail } from './strings/trail';
import { guide } from './strings/guide';
import { site } from './strings/site';

export const ui: Record<string, Record<Lang, string>> = {
  ...nav,
  ...footer,
  ...home,
  ...cards,
  ...common,
  ...author,
  ...thesis,
  ...democides,
  ...nazism,
  ...socialism,
  ...colonialism,
  ...dictatorships,
  ...preservation,
  ...trail,
  ...guide,
  ...site,
};

export function t(key: string, lang: Lang): string {
  const entry = ui[key];
  if (!entry) throw new Error(`Missing i18n key: ${key}`);
  return entry[lang] ?? entry[DEFAULT_LANG];
}

export function localizedHref(path: string, lang: Lang, base = ''): string {
  const clean = path.replace(/^\/+/, '');
  const baseClean = base.replace(/\/+$/, '');
  if (lang === DEFAULT_LANG) return `${baseClean}/${clean}`;
  return `${baseClean}/${lang}/${clean}`;
}
