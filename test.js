'use strict';

require('mocha');
var assert = require('assert');
var red = require('ansi-red');
var cyan = require('ansi-cyan');
var yellow = require('ansi-yellow');
var strip = require('./');

describe('strip-color', function () {
  it('should strip ansi color codes from the given string', function () {
    assert.equal(strip(red('abc')), 'abc');
    assert.equal(strip(yellow(red('abc'))), 'abc');
    assert.equal(strip(cyan(red('abc'))), 'abc');
  });
});
