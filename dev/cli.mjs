#!/usr/bin/env node
import commander from 'commander';

/**
 * @license MIT
 */
/**
 * @fileoverview
 * Specify the commands for this project's CLI.
 */

/**
 * Say hello!
 *
 * @param {string} msg
 * The message to print.
 *
 * @return {void}
 */
const sayHello = (msg = 'Hello world!') => console.log(msg);

const commands = {
  sayHello,
};

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
   * If no args are provided, this block executes.
   */
  console.log('\n');
}
