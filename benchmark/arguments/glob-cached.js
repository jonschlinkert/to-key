var glob = require('glob');
var cache = {};

// don't do this. this is a part of a larger test, doing
// this kind of caching (alone) will not yield the results
// you expect - files change.

module.exports = function(arr) {
  return arr.map(function (pattern) {
    return cache[pattern] || (cache[pattern] = glob.sync(pattern));
  });
};
