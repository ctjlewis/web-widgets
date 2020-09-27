/** @license MIT */

import {
  BodyWidget,
  StatefulWidget,
} from '../lib/widgets.js';

/** @type {StatefulWidget} */
const body = BodyWidget.from(document.body);
requestAnimationFrame(() => body.initState());
