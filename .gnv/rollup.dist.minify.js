/**
 * @license MIT
 */
/**
 * @fileoverview
 * Rollup ES dist config.
 */

import { distExternal } from './rollup.externals.js';
import bundleSize from 'rollup-plugin-bundle-size';
import closureCompiler from '@ampproject/rollup-plugin-closure-compiler';
import glob from 'glob';

/**
 * Overwrite files in dist/.
 */
export default [
  ...glob.sync('dist/*').map(
      (file) => ({
        input: file,
        output: {
          file: file,
          // will help with compiler inlining
          preferConst: true,
        },
        /**
         * To minify, only Closure Compiler is needed. Bundle size plugin is
         * included for convenience.
         */
        plugins: [
          closureCompiler({
            compilation_level: 'SIMPLE',
            language_in: 'ES_NEXT',
            language_out: 'NO_TRANSPILE',
          }),
          bundleSize(),
        ],
        external: distExternal,
      }),
  ),
];

/**
 * Later, use ADVANCED with NodeJS externs via:
 */
// closureCompiler({
//   compilation_level: 'ADVANCED',
//   process_common_js_modules: true,
//   module_resolution: 'NODE',
//   js: 'node_modules',
//   externs: EXTERNS,
//   // jscomp_off: '*',
//   language_in: 'ES_NEXT',
//   language_out: 'NO_TRANSPILE',
// }),
