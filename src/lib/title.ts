/**
 * Returns a display title, falling back to a human-readable version of the
 * item id when the frontmatter title is empty or missing.
 */
export function displayTitle(title: string, id: string): string {
	if (title && title.trim()) return title;
	return id
		.split('-')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ');
}
