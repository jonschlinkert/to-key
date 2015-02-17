'use strict';

/**
 * Testing the time it takes to stringify an entire config object,
 * to get the stored file paths from a previous build.
 */

var grunt = {file: {readJSON: function () {}}};

module.exports = [{
  pkg: grunt.file.readJSON('package.json'),
  uglify: {
    options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    build: {
      src: 'src/<%= pkg.name %>.js',
      dest: 'build/<%= pkg.name %>.min.js'
    }
  }
}];
