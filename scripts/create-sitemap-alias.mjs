import { copyFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const source = path.join(distDir, 'sitemap-0.xml');
const target = path.join(distDir, 'sitemap.xml');

try {
  await access(source, constants.F_OK);
  await copyFile(source, target);
  console.log('Created sitemap alias at dist/sitemap.xml');
} catch (error) {
  console.warn('Skipping sitemap alias creation:', error instanceof Error ? error.message : error);
}
