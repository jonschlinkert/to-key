/*!
 * to-key <https://github.com/jonschlinkert/to-key>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var assert = require('assert');
var should = require('should');
var toKey = require('./');

describe('toKey', function () {
  it('should convert a number:', function () {
    toKey(1000).should.equal('1000');
  });

  it('should convert a date object:', function () {
    toKey(new Date()).should.be.a.string;
    toKey(new Date()).should.not.be.a.date;
    toKey(new Date()).should.match(/\d/);
  });

  it('should convert a buffer:', function () {
    toKey(new Buffer('foo')).should.equal('foo');
  });

  it('should convert an array:', function () {
    toKey(['a', 'b', 'c']).should.equal('abc');
    toKey(['a', 'b', {c: 'd', e: 'f'}]).should.equal('abcdef');
    toKey(['a', 10, {c: 'd', e: 'f'}]).should.equal('a10cdef');
  });

  it('should convert an object:', function () {
    toKey({a: 'a', b: 'b'}).should.equal('aabb');
  });

  it('should convert nested objects to a string:', function () {
    toKey({foo: ['bar', {baz: {fex: 'fex'}}], one: 'two'}).should.equal('foobarbazfexfexonetwo');
  });

  it('arguments example:', function () {
    function foo() {
      return toKey([].slice.call(arguments));
    }
    foo({foo: ['bar', {baz: {fex: 'fex'}}], one: 'two'}).should.equal('foobarbazfexfexonetwo');
  });
});
