import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import {
	classifyItem,
	ensureDir,
	fetchText,
	inferCollection,
	readYaml,
	resolveRawFolder,
	sha256,
	slugify,
	sourceIdForUrl,
	writeYaml,
} from '../lib.mjs';

const INDEX_URL = 'https://www.hawaii.edu/powerkills/20TH.HTM';
const CANONICAL_IDS = new Map([
	['20TH.HTM', '20th-century-democide'],
	['NOTE1.HTM', 'death-by-government'],
	['NOTE2.HTM', 'chinas-bloody-century-note'],
	['NOTE3.HTM', 'democide-nazi-genocide-and-mass-murder-note'],
	['NOTE4.HTM', 'lethal-politics-note'],
	['NOTE5.HTM', 'statistics-of-democide-note'],
	['NOTE15.HTM', 'death-or-democracy-note-15'],
	['DBG.CHAP1.HTM', 'death-by-government-chapter-1'],
	['DBG.CHAP2.HTM', 'definition-and-qualifications'],
	['DBG.TAB1.2.GIF', 'death-by-government-table-1-2'],
	['SOD.REF.HTM', 'statistics-of-democide-sources'],
	['SOD.NOTE.HTM', 'statistics-of-democide-notes'],
	['SOD.CHAP13.HTM', 'american-bombing-and-other-democide'],
	['SOD.CHAP14.HTM', 'centi-kilo-murderers'],
	['SOD.CHAP15.HTM', 'lesser-murderers'],
	['SOD.CHAP16.HTM', 'social-field-of-democide'],
	['SOD.TAB13.1.GIF', 'american-bombing-table'],
	['SOD.TAB14.2.GIF', 'quasi-state-democide-table'],
	['SOD.TAB16A.1.GIF', 'democide-summary-by-regime-table'],
	['SOD.TAB16.1.GIF', 'social-field-democide-types-table'],
	['SOD.TAB16.2.GIF', 'social-field-descriptive-statistics-table'],
	['SOD.TAB16.3.GIF', 'social-field-intercorrelations-table'],
	['SOD.TAB16.4.GIF', 'social-field-factors-table'],
	['SOD.FIG23.2.GIF', 'democide-year-by-year-figure'],
	['GENOCIDE.ENCY.HTM', 'what-is-genocide'],
	['GENOCIDE.HTM', 'democide-versus-genocide'],
	['WSJ.ART.HTM', 'war-isnt-this-centurys-biggest-killer'],
	['COM.ART.HTM', 'how-many-did-communism-murder'],
	['WF.CHAP6.HTM', 'khmer-rouge-and-rwandan-genocide-section'],
	['CHARNY.CHAP.HTM', 'mortacracies-and-megamurderers-annotated-bibliography'],
	['HOLO.PAPER.HTM', 'holocaust-in-comparative-perspective'],
	['POSTWWII.HTM', 'democide-since-world-war-ii'],
	['http://freedomspeace.blogspot.com/2005/11/reevaluating-chinas-democide-to-be.html', 'reevaluating-chinas-democide'],
	['http://freedomspeace.blogspot.com/2005/12/reevaluating-colonial-democide.html', 'reevaluating-colonial-democide'],
]);
const CANONICAL_ID_SET = new Set(CANONICAL_IDS.values());

const CANONICAL_TITLES = new Map([
	['NOTE1.HTM', 'Death by Government'],
	['NOTE2.HTM', "China's Bloody Century"],
	['NOTE3.HTM', 'Democide: Nazi Genocide and Mass Murder'],
	['NOTE4.HTM', 'Lethal Politics'],
	['NOTE5.HTM', 'Statistics of Democide'],
	['NOTE15.HTM', 'Death by Government in China and Cambodia Note 15'],
	['DBG.TAB1.2.GIF', 'Death by Government Table 1.2'],
	['SOD.REF.HTM', 'Statistics of Democide sources'],
	['SOD.NOTE.HTM', 'Statistics of Democide notes'],
	['SOD.TAB16A.1.GIF', 'Summary by regime table'],
	['SOD.TAB16.1.GIF', 'Types of democide table'],
	['SOD.TAB16.2.GIF', 'Descriptive statistics table'],
	['SOD.TAB16.3.GIF', 'Intercorrelations table'],
	['SOD.TAB16.4.GIF', 'Factors table'],
	['SOD.FIG23.2.GIF', 'Democide year-by-year figure'],
	['WF.CHAP6.HTM', 'Cambodian democide and Rwandan genocide'],
	['http://freedomspeace.blogspot.com/2005/11/reevaluating-chinas-democide-to-be.html', "Reevaluating China's Democide to Be 76,702,000"],
	['http://freedomspeace.blogspot.com/2005/12/reevaluating-colonial-democide.html', 'Reevaluating Colonial Democide'],
]);

function absolutize(url) {
	if (url.startsWith('http://') || url.startsWith('https://')) return url;
	return new URL(url, INDEX_URL).toString();
}

function canonicalKey(href, absolute) {
	if (CANONICAL_IDS.has(href)) return href;
	if (CANONICAL_IDS.has(absolute)) return absolute;
	const pathName = new URL(absolute).pathname.split('/').pop() ?? href;
	return pathName.toUpperCase();
}

function canonicalId(href, absolute, text) {
	const key = canonicalKey(href, absolute);
	return CANONICAL_IDS.get(key) ?? slugify(text || href.replace(/\.[^.]+$/, ''));
}

function canonicalTitle(href, absolute, text) {
	const key = canonicalKey(href, absolute);
	return CANONICAL_TITLES.get(key) ?? text ?? href;
}

const existingItems = readYaml('data/manifests/items.yaml') ?? [];
const itemsById = new Map(existingItems.map((item) => [item.item_id, item]));
const curatedByUrl = new Map(
	existingItems
		.filter((item) => item.site_section !== '20th-index')
		.map((item) => [item.original_url, item]),
);
const { body, finalUrl } = await fetchText(INDEX_URL);
const sourceId = sourceIdForUrl(finalUrl);
const rawDir = path.join(process.cwd(), resolveRawFolder(finalUrl, sourceId));
ensureDir(rawDir);

fs.writeFileSync(path.join(rawDir, '20th-century-democide.html'), body, 'utf8');
fs.writeFileSync(
	path.join(rawDir, '20th-century-democide.meta.json'),
	JSON.stringify(
		{
			item_id: '20th-century-democide',
			original_url: INDEX_URL,
			source_used: finalUrl,
			source_type: 'original',
			content_type: 'text/html',
			sha256: sha256(body),
			captured_at: new Date().toISOString(),
		},
		null,
		2,
	),
);

const $ = cheerio.load(body);
const records = [];

$('a[href]').each((_, element) => {
	const href = $(element).attr('href');
	if (!href || href.startsWith('#')) return;
	const text = $(element).text().replace(/\s+/g, ' ').trim();
	const absolute = absolutize(href);
	const canonical = curatedByUrl.get(absolute);
	const itemId = canonical?.item_id ?? canonicalId(href, absolute, text);
	const title = canonical?.title ?? canonicalTitle(href, absolute, text);
	const preferredSourceId = canonical?.preferred_source_id ?? sourceIdForUrl(absolute);
	const related = canonical?.related_item_ids ?? [];

	records.push({
		item_id: itemId,
		title,
		short_title: href,
		collection_id: canonical?.collection_id ?? inferCollection(href, text),
		item_type: classifyItem(href, text),
		language: 'en',
		original_date: 'unknown',
		site_section: '20th-index',
		original_url: absolute,
		preferred_source_id: preferredSourceId,
		fallback_source_ids: ['wayback'],
		capture_status: itemsById.get(itemId)?.capture_status ?? 'pending',
		rights_note: 'Preserved source material, rights retained by original rights holders unless stated otherwise.',
		translation_status: 'not-started',
		tags: ['20th-century-democide'],
		related_item_ids: related,
	});
});

const merged = new Map();
for (const item of existingItems) {
	merged.set(item.item_id, item);
}
for (const item of records) {
	const existing = merged.get(item.item_id);
	if (!existing || existing.site_section === '20th-index') {
		merged.set(item.item_id, existing ? { ...item, capture_status: existing.capture_status } : item);
	}
}

const dedupedByUrl = new Map();
for (const item of merged.values()) {
	const current = dedupedByUrl.get(item.original_url);
	if (!current) {
		dedupedByUrl.set(item.original_url, item);
		continue;
	}

	const currentScore =
		(current.site_section !== '20th-index' ? 4 : 0) +
		(CANONICAL_ID_SET.has(current.item_id) ? 2 : 0) +
		(current.capture_status !== 'pending' ? 1 : 0);
	const nextScore =
		(item.site_section !== '20th-index' ? 4 : 0) +
		(CANONICAL_ID_SET.has(item.item_id) ? 2 : 0) +
		(item.capture_status !== 'pending' ? 1 : 0);

	if (nextScore > currentScore) {
		dedupedByUrl.set(item.original_url, item);
	}
}

writeYaml(
	'data/manifests/items.yaml',
	Array.from(dedupedByUrl.values()).sort((a, b) => a.item_id.localeCompare(b.item_id)),
);
console.log(`Indexed ${records.length} links from ${INDEX_URL}`);
