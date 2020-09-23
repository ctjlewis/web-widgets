import {PageScrollIndicator} from './lib/page.js';

const widget = PageScrollIndicator.from(document.currentScript.parentElement);
requestAnimationFrame(() => widget.initState());