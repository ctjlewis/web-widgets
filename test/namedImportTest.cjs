/** @license MIT */

require('chai/register-expect');
require('enable-browser-mode');

const {
  Widget,
  Heading1,
} = require('../dist/widgets.cjs');

describe('Named CJS imports', () => {
  it('Should work for various widgets', () => {
    expect(Widget).to.be.a('function');
    expect(Heading1).to.be.a('function');
  });
});
