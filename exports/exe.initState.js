/** @license MIT */

/** Import widget from rendered exe. */
// import page from '../lib/page.js';

/**
 * Execute `initState`.
 */
// page.render();

// const getElement = () => document.getElementById(page.attributes.id);
// requestAnimationFrame(() => page.initState());

import { BodyWidget, StatefulWidget } from '../lib/widgets.js';

/** @type {StatefulWidget} */
const body = BodyWidget.from(document.body);
requestAnimationFrame(() => body.initState());
