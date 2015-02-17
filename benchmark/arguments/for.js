'use strict';

var typeOf = require('kind-of');
var forIn = require('for-in');
var map = require('arr-map');

module.exports = stringify;

function stringify(val) {
  if (val === undefined || val === null) {
    return '';
  }

  if (typeof val !== 'object') {
    return '' + val;
  }

  if (Array.isArray(val)) {
    return map(val, stringify).join('');
  }

  var type = toString.call(val);

  if (type === '[object Function]') {
    return '';
  }

  if (val instanceof RegExp || type === '[object RegExp]') {
    return val.source;
  }

  if (val instanceof Date || type === '[object Date]') {
    return Date.parse(val);
  }

  if (type === '[object Arguments]') {
    return map([].slice.call(val), stringify).join('');
  }

  if (Buffer.isBuffer(val)) {
    return val.toString();
  }

  return toString(val);
};

function toString(obj) {
  if (typeof obj !== 'object') {
    return obj + '';
  }

  var str = '';

  if (Array.isArray(obj)) {
    str += map(obj, toString);
  } else {
    forIn(obj, function (val, key) {
      if (typeof val === 'object') {
        str += key + toString(val);
      } else {
        str += key + val;
      }
    });
    str = str.split(/[\W\s]/).join('');
  }
  return str;
}
