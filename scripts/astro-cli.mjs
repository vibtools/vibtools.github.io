#!/usr/bin/env node

import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const [major, minor] = process.versions.node.split('.').map(Number);
const supported = (major === 20 && minor >= 20) || (major === 22 && minor >= 12) || major >= 24;

if (!supported) {
  console.error(
    `Node.js v${process.versions.node} is not supported by this project. Use Node.js 20.20.x, Node.js 22.12+, or Node.js 24+.`,
  );
  process.exit(1);
}

const require = createRequire(import.meta.url);
const astroPackagePath = require.resolve('astro/package.json');
const astroCliUrl = pathToFileURL(join(dirname(astroPackagePath), 'dist/cli/index.js'));
const { cli } = await import(astroCliUrl.href);

await cli(process.argv);
