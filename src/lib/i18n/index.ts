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
import { autor } from './strings/autor';
import { tese } from './strings/tese';
import { democidios } from './strings/democidios';
import { nazismo } from './strings/nazismo';
import { socialismo } from './strings/socialismo';
import { colonialismo } from './strings/colonialismo';
import { ditaduras } from './strings/ditaduras';
import { preservation } from './strings/preservation';
import { trilha } from './strings/trilha';
import { guide } from './strings/guide';

export const ui: Record<string, Record<Lang, string>> = {
  ...nav,
  ...footer,
  ...home,
  ...cards,
  ...common,
  ...autor,
  ...tese,
  ...democidios,
  ...nazismo,
  ...socialismo,
  ...colonialismo,
  ...ditaduras,
  ...preservation,
  ...trilha,
  ...guide,
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
