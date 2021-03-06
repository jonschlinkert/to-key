# to-key [![NPM version](https://badge.fury.io/js/to-key.svg)](http://badge.fury.io/js/to-key)

> Convert any value to a string that can be used as the key of an object.

## Install with [npm](npmjs.org)

```bash
npm i to-key --save
```

## Usage

```js
var toKey = require('to-key');

toKey({foo: ['bar', {baz: {fex: 'fex'}}], one: 'two'});
//=> 'foobarbazfexfexonetwo'
```

This can be used for caching results when the results are predictable based on user input or other settings.

**Example**

We'll assume that `someFn` in the example does some heavy processing on whatever arguments are passed that can be avoided if we can instead return the cached value of a previous call.

```js
var cache = {};
function myApp(one, two, three) {
  var key = toKey([].slice.call(arguments));
  if (cache.hasOwnProperty(key)) {
    return cache[key];
  }

  var result = someFn(one, two, three);
  cache[key] = result;
  return result;
}
```

**Why do this?**

Given the following:

- `A` is time it takes (to-key or whatever you use) to stringify any arguments are passed
- `B` is the amount of time it takes to retrieve a stored value from the cache 
- `C` is the time it takes your application to process arguments and store a new value on the cache

It's a good approach when `(A + B) < C`. In my applications. You can also use logic that conditionally uses cached results based on the complexity of the arguments passed. 

## Run tests

Install dev dependencies:

```bash
npm i -d && npm test
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/to-key/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on February 16, 2015._
