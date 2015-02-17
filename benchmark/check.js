'use strict';

var chalk = require('chalk');
var path = require('path');
var glob = require('glob');

/**
 * Sanity check
 *
 * Run to ensure that all fns return the same result.
 */

var fixtures = glob.sync(__dirname + '/fixtures/patterns.js');

glob.sync(__dirname + '/arguments/glob-*.js').forEach(function (fp) {
  var fn = require(path.resolve(__dirname, 'objects', fp));
  var name = path.basename(fp, path.extname(fp));

  fixtures.forEach(function (fixture) {
    var val = require(fixture);

    console.log(chalk.bold(name) + ':', fn.apply(null, val));
  });
});
