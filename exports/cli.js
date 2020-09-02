#!/usr/bin/env node

/**
 * @license MIT
 */
/**
 * @fileoverview
 * Specify the exports for this project's CLI.
 */

import commander from 'commander';
import commands from '../lib/commands.js';

/**
 * Set up CLI commands with `commander`. Command args will be automatically
 * parsed and sent to your callback.
 */
commander
    .command('say-hello [msg]')
    .description('Say hello, or provide a special message instead.')
    .action(commands.sayHello);

/**
 * Parse command line arguments. Use try {...} catch {...} and
 * program.exitOverride() to prevent nonzero exit.
 *
 * You should leave this where it is - it prevents errors from throwing when no
 * command line args are provided.
 */
try {
  commander.exitOverride();
  commander.parse(process.argv);
}
catch (e) {
  /**
   * Don't bother throwing any errors if there are no args provided.
   */
}
