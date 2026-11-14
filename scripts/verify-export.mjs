import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('out');
const routes = ['', 'features', 'pricing', 'privacy', 'terms', 'support', 'delete-account', 'success', 'cancel'];
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
for (const route of routes) {
  const html = await readFile(path.join(root, route, 'index.html'), 'utf8');
  assert.match(html, /<html[^>]+lang="en-GB"/);
  assert.match(html, /<h1[ >]/);
  assert.equal((html.match(/<main[ >]/g) ?? []).length, 1, `${route}: expected one main landmark`);
  assert.match(html, /support@inscribi\.app/);
  assert.match(html, /https:\/\/www\.inscribi\.app/);
  assert.ok(!html.includes('/api/stripe'), `${route}: server payment route leaked into static site`);
  assert.ok(html.includes(`${basePath}/images/inscribi-logo-horizontal-transparent.png`));
}
assert.ok(!(await readdir(root)).includes('api'), 'Static deployment must not contain API endpoints');
for (const file of ['404.html', 'robots.txt', 'sitemap.xml']) await readFile(path.join(root, file));
for (const route of ['/privacy/', '/terms/', '/support/', '/delete-account/']) {
  assert.ok((await readFile(path.join(root, 'sitemap.xml'), 'utf8')).includes(`https://www.inscribi.app${route}`));
}
console.log(`Verified ${routes.length} static routes, legal links, metadata, support paths and absence of payment APIs.`);
