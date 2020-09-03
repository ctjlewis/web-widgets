/** @license MIT */
import { Center } from './widgets.js';
import { addStylesheet } from '../lib/core.js';

/** Initialize CSSOM stylesheet. */
addStylesheet();

new Center().build().render();
