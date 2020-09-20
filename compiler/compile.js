/** @license MIT */

import { spawnSync } from 'child_process';

spawnSync(
    'google-closure-compiler',
    [
    /** Language in/out and compilation level. */
      '--language_in ES_NEXT',
      '--language_out ECMASCRIPT5_STRICT',
      '-O ADVANCED',
      '-W VERBOSE',
      /** Handle Node and CJS/ESM. */
      '--process_common_js_modules',
      '--module_resolution NODE',
      // '--dependency_mode PRUNE',
      /** Bundle into one giant closure, use type optimization. */
      // '--isolation_mode IIFE',
      // '--assume_function_wrapper',
      // '--use_types_for_optimization',
      /** Use compiler polyfills. */
      // '--rewrite_polyfills',
      /** Disable warnings for nonstandard JSDOC annotations. */
      '--jscomp_off nonStandardJsDocs',
      /** Disable warnings for unknown @defines. */
      '--jscomp_off unknownDefines',
      /** Logic for @defines. */
      '-D PRODUCTION=true',
      '-D DEBUG=false',
      /** I/O settings. */
      '--entry_point lib/page.js',
      '--js lib/**.js',
      '--chunk initState.common:auto',
      '--js compiler/widget.body.js',
      '--chunk initState.body:1:initState.common',
      '--js compiler/widget.pageScrollIndicator.js',
      '--chunk initState.pageScrollIndicator:1:initState.common',
      '--chunk_output_path_prefix compiler/',
    ],
    {
      shell: true,
      stdio: 'inherit',
    },
);
