/** @license MIT */

/** Import widget from rendered exe. */
// import page from '../lib/page.js';

/**
 * Execute `initState`.
 */
// page.render();

// const getElement = () => document.getElementById(page.attributes.id);
// requestAnimationFrame(() => page.initState());

import { PageBody, StatefulWidget } from '../lib/widgets.js';

/** @type {StatefulWidget} */
const pageBody = PageBody.from(document.body);
requestAnimationFrame(() => pageBody.initState());
