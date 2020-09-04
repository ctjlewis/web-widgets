/** @license MIT */

import 'chai/register-expect.js';
import 'enable-browser-mode';

import {
  Widget as DevWidget,
  CenteredElement as DevCenter,
} from '../dev/widgets.mjs';

import {
  Widget as DistWidget,
  CenteredElement as DistCenter,
} from '../dist/widgets.mjs';

describe('Named ESM imports', () => {
  it('Should work for various dev widgets', () => {
    expect(DevWidget).to.be.a('function');
    expect(DevCenter).to.be.a('function');
  });
  it('Should work for various dist widgets', () => {
    expect(DistWidget).to.be.a('function');
    expect(DistCenter).to.be.a('function');
  });
});

console.log('Dev version of Center():', new DevCenter().build());
console.log('Dist version of Center():', new DistCenter().build());
