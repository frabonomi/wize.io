import slugify from '@sindresorhus/slugify';
import { customAlphabet } from 'nanoid';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import prettier from 'prettier';

import {
  articlesRoot,
  getArticleFolders,
  getArticleIds,
  projectRoot,
  syncRegistry,
} from './article-registry.mjs';

const title = process.argv.slice(2).join(' ').trim();

if (!title) {
  throw new Error('Usage: pnpm article:new "Your article title"');
}

const existingIds = await getArticleIds(await getArticleFolders());
const generateId = customAlphabet('23456789abcdefghjkmnpqrstuvwxyz', 5);
let id;

do {
  id = generateId();
} while (existingIds.has(id));

const slug = slugify(title) || 'article';
const now = new Date();
const createdAt = [
  now.getFullYear(),
  String(now.getMonth() + 1).padStart(2, '0'),
  String(now.getDate()).padStart(2, '0'),
].join('-');
const template = await readFile(
  path.join(projectRoot, 'scripts/templates/article.mdx'),
  'utf8',
);
const replacements = {
  ARTICLE_ID: JSON.stringify(id),
  ARTICLE_TITLE: JSON.stringify(title),
  CREATED_AT: JSON.stringify(createdAt),
};
const source = template.replace(
  /__(ARTICLE_ID|ARTICLE_TITLE|CREATED_AT)__/g,
  (_, key) => replacements[key],
);
const formatted = await prettier.format(source, {
  ...(await prettier.resolveConfig(path.join(articlesRoot, slug, 'index.mdx'))),
  filepath: path.join(articlesRoot, slug, 'index.mdx'),
});

let folderName = slug;
try {
  await mkdir(path.join(articlesRoot, folderName));
} catch (error) {
  if (error.code !== 'EEXIST') throw error;
  folderName = `${slug}-${id}`;
  await mkdir(path.join(articlesRoot, folderName));
}

const articlePath = path.join(articlesRoot, folderName, 'index.mdx');
await writeFile(articlePath, formatted);
await syncRegistry();

console.log(`Created content/articles/${folderName}/index.mdx`);
console.log(`Preview: http://localhost:3000/articles/${id}-${slug}`);
