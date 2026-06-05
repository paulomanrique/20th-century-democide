import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

/**
 * Rehype plugin that rewrites corpus-internal relative links.
 *
 * The Rummel markdown content preserves the original hawaii.edu HTML
 * links verbatim (e.g. `NOTE2.HTM`, `USSR.CHAP.1.HTM`, `USSR.FIG1.1.GIF`).
 * These are not valid routes on this site. This plugin:
 *
 *  1. Loads `data/manifests/items.yaml` once.
 *  2. Builds a case-insensitive map from each item's `short_title`
 *     (original filename) to its `item_id` (the URL slug).
 *  3. Walks all `<a href>` and `<img src>` nodes; for each value that
 *     looks like a bare filename (no protocol, no leading slash,
 *     and not an anchor):
 *       - if the filename matches a known short_title → rewrite to
 *         `${base}/items/<item_id>/`
 *       - otherwise → rewrite to the original hawaii.edu URL
 *         (https://www.hawaii.edu/powerkills/<filename>) so the link
 *         still resolves to *something*.
 *  4. Anchor-only hrefs (`#FOO`) are left alone.
 *
 * @param {{ basePath: string }} options
 */
export function rewriteCorpusLinks({ basePath }) {
	const items = YAML.parse(
		fs.readFileSync(path.resolve('data/manifests/items.yaml'), 'utf8'),
	);
	const shortTitleToSlug = new Map();
	for (const item of items) {
		if (item.short_title && item.item_id) {
			shortTitleToSlug.set(item.short_title.toUpperCase(), item.item_id);
		}
	}

	const normalizedBase = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
	const HAWAII = 'https://www.hawaii.edu/powerkills';

	function rewrite(value) {
		if (!value || typeof value !== 'string') return value;
		// Skip absolute URLs, protocol-relative, anchors, and root-relative
		// (root-relative is handled by the other plugin).
		if (/^(https?:)?\/\//.test(value)) return value;
		if (value.startsWith('#')) return value;
		if (value.startsWith('/')) return value;
		if (value.startsWith('mailto:')) return value;

		// Split off any anchor or query
		const hashIdx = value.indexOf('#');
		const queryIdx = value.indexOf('?');
		let cutAt = -1;
		if (hashIdx >= 0 && queryIdx >= 0) cutAt = Math.min(hashIdx, queryIdx);
		else cutAt = Math.max(hashIdx, queryIdx);
		const filename = cutAt >= 0 ? value.slice(0, cutAt) : value;
		const suffix = cutAt >= 0 ? value.slice(cutAt) : '';

		if (!filename) return value;

		// Only attempt to rewrite if it looks like a hawaii.edu legacy file
		// (uppercase filename ending in .HTM/.HTML/.GIF/.JPG/.PNG/.PDF).
		if (!/^[A-Z0-9._-]+\.(HTM|HTML|GIF|JPG|JPEG|PNG|PDF)$/i.test(filename)) {
			return value;
		}

		const slug = shortTitleToSlug.get(filename.toUpperCase());
		if (slug) {
			return `${normalizedBase}/items/${slug}/${suffix}`;
		}
		// Fallback to the original site so the link still resolves
		return `${HAWAII}/${filename}${suffix}`;
	}

	return () => (tree) => {
		const visit = (node) => {
			if (!node || typeof node !== 'object') return;
			if (node.type === 'element' && node.properties) {
				if (node.tagName === 'a' && typeof node.properties.href === 'string') {
					node.properties.href = rewrite(node.properties.href);
				}
				if (node.tagName === 'img' && typeof node.properties.src === 'string') {
					node.properties.src = rewrite(node.properties.src);
				}
			}
			if (Array.isArray(node.children)) {
				for (const child of node.children) visit(child);
			}
		};
		visit(tree);
	};
}
