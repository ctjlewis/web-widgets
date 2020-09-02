/**
 * @license MIT
 */
/**
 * @fileoverview
 * Rollup CJS dist config.
 */

import glob from 'glob';
import { distPlugins } from './rollup.plugins.js';
import { distExternal } from './rollup.externals.js';

const distCjs = glob.sync(
    'dist/*.mjs',
    {
      ignore: ['./dev/universal.*'],
    },
);

export default [
  ...distCjs.map((file) => ({
    input: file,
    output: {
      file: file.replace('mjs', 'cjs'),
      format: 'cjs',
      exports: 'named',
    },
    plugins: distPlugins,
    external: distExternal,
  })),
];
