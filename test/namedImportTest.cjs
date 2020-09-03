/** @license MIT */

require('enable-browser-mode');

const {
  Widget,
  Center,
} = require('../dist/node.cjs');

describe('Named CJS imports', () => {
  it('Should work for various widgets', () => {
    expect(Widget).to.be.a('function');
    expect(Center).to.be.a('function');
  });
});
