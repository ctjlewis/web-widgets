import { PageScrollIndicator } from '../lib/page.js';
import { BodyWidget } from '../lib/widgets.js';
/** @license MIT */

import './exe.render.js';
BodyWidget.from(document.body).initState();
PageScrollIndicator.from(document.body.firstChild).initState();
