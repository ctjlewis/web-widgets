/** @license MIT */

import 'chai/register-expect.js';
import 'enable-browser-mode';

import {
  Widget as DevWidget,
  Center as DevCenter,
} from '../dev/widgets.mjs';

import {
  Widget as DistWidget,
  Center as DistCenter,
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

console.log(new DevCenter().build());
console.log(new DistCenter().build());
