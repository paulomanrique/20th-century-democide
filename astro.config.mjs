// @ts-check
import { defineConfig } from 'astro/config';

const site = 'https://paulomanrique.github.io/20th-century-democide';
const base = '/20th-century-democide/';

/** @param {string} basePath */
function prefixRootRelativeUrls(basePath) {
	const normalizedBase = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
	return () => {
		/** @param {any} tree */
		return (tree) => {
			/** @param {any} node */
			const visit = (node) => {
				if (!node || typeof node !== 'object') return;
				if (node.type === 'element' && node.properties) {
					for (const key of ['href', 'src']) {
						const value = node.properties[key];
						if (typeof value === 'string' && value.startsWith('/') && !value.startsWith(normalizedBase + '/')) {
							node.properties[key] = `${normalizedBase}${value}`;
						}
					}
				}
				if (Array.isArray(node.children)) {
					for (const child of node.children) visit(child);
				}
			};
			visit(tree);
		};
	};
}

export default defineConfig({
	site,
	base,
	output: 'static',
	markdown: {
		syntaxHighlight: 'shiki',
		rehypePlugins: [prefixRootRelativeUrls(base)],
	},
});
