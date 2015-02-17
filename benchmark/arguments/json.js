'use strict';

module.exports = function(val) {
  return JSON.stringify(val).split(/[\W\s]/).join('');
};
