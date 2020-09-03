/** @license MIT */

import 'enable-browser-mode';

import {
  Widget,
  Center,
} from '../dist/node.mjs';

describe('Named ESM imports', () => {
  it('Should work for various widgets', () => {
    expect(Widget).to.be.a('function');
    expect(Center).to.be.a('function');
  });
});
