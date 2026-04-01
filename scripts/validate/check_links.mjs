import fs from 'node:fs';
import path from 'node:path';

function walk(dir) {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	return entries.flatMap((entry) => {
		const target = path.join(dir, entry.name);
		return entry.isDirectory() ? walk(target) : [target];
	});
}

const itemDir = path.join(process.cwd(), 'src', 'content', 'en', 'items');
if (!fs.existsSync(itemDir)) {
	console.log('No item content yet.');
	process.exit(0);
}

const files = walk(itemDir).filter((file) => file.endsWith('.md'));
for (const file of files) {
	const body = fs.readFileSync(file, 'utf8');
	for (const match of body.matchAll(/\]\((\/assets\/images\/[^)]+)\)/g)) {
		const target = path.join(process.cwd(), 'public', match[1]);
		if (!fs.existsSync(target)) {
			throw new Error(`Missing local asset referenced by ${path.relative(process.cwd(), file)}: ${match[1]}`);
		}
	}
}

console.log(`Link check passed for ${files.length} item files.`);
