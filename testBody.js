import { BodyWidget } from './lib/page.js';

const widget = BodyWidget.from(document.currentScript.parentElement);
requestAnimationFrame(() => widget.initState());
