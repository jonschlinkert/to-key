var glob = require('glob');

// don't do this. this is a part of a larger test, doing
// this kind of caching (alone) will not yield the results
// you expect - files change.

module.exports = function(arr) {
  return arr.map(function (pattern) {
    return glob.sync(pattern);
  });
};
