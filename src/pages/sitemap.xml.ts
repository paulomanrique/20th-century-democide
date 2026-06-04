import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { LANGUAGES, DEFAULT_LANG, localizedHref } from '../lib/i18n';

const SITE = 'https://paulomanrique.github.io/20th-century-democide';

const EDITORIAL_PATHS = [
	'',
	'autor/',
	'tese/',
	'guia/',
	'democidios/',
	'democidios/nazismo/',
	'democidios/socialismo/',
	'democidios/colonialismo/',
	'democidios/ditaduras-latinas/',
	'preservation/',
];

const CORPUS_PATHS = [
	'collections/',
	'dashboard/',
	'sources/',
	'contributing/',
	'rights/',
];

function url(path: string) {
	const clean = path.replace(/^\/+/, '');
	return `${SITE}/${clean}`;
}

export const GET: APIRoute = async () => {
	const items = await getCollection('items', ({ data }) => !data.draft);
	const collections = await getCollection('collections');

	const entries: string[] = [];

	// Editorial pages with hreflang alternates per locale
	for (const path of EDITORIAL_PATHS) {
		for (const { code } of LANGUAGES) {
			const locUrl = url(localizedHref(path, code));
			const alts = LANGUAGES.map(({ code: alt }) =>
				`<xhtml:link rel="alternate" hreflang="${alt}" href="${url(localizedHref(path, alt))}" />`
			).join('');
			const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${url(localizedHref(path, DEFAULT_LANG))}" />`;
			entries.push(
				`<url><loc>${locUrl}</loc>${alts}${xDefault}</url>`
			);
		}
	}

	// Corpus pages (English-only, no alternates)
	for (const path of CORPUS_PATHS) {
		entries.push(`<url><loc>${url(path)}</loc></url>`);
	}
	for (const item of items) {
		entries.push(`<url><loc>${url(`items/${item.id}/`)}</loc></url>`);
	}
	for (const coll of collections) {
		entries.push(`<url><loc>${url(`collections/${coll.id}/`)}</loc></url>`);
	}

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
