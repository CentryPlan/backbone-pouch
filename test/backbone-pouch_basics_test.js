'use strict';

var backbone_pouch = require('../lib/backbone-pouch.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.sync = {
  api: function(test) {
    test.expect(3);
    test.equal(typeof backbone_pouch.defaults, 'object', 'should have a defaults property.');
    test.equal(typeof backbone_pouch.sync, 'function', 'should be a function.');
    test.equal(typeof backbone_pouch.sync(), 'function', 'should return a function.');
    test.done();
  },
  defaults: function(test) {
    test.expect(4);
    test.equal(typeof backbone_pouch.sync().defaults, 'object', 'should have a defaults property.');
    test.equal(backbone_pouch.sync().defaults.fetch, backbone_pouch.defaults.fetch, 'should have set default fetch method.');
    test.equal(backbone_pouch.sync({ foo: 'bar' }).defaults.foo, 'bar', 'should have merged foo property.');
    test.equal(backbone_pouch.sync({ fetch: 'query' }).defaults.fetch, 'query', 'should have overwritten fetch method.');
    test.done();
  }
};
