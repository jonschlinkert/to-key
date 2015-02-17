/*!
 * to-key <https://github.com/jonschlinkert/to-key>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var Suite = require('benchmarked');

var suite = new Suite({
  expected: true,
  fixtures: 'fixtures/[a-z]*.js',
  add: 'arguments/!(glob).js',
  cwd: __dirname
});

suite.run();
