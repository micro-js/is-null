/**
 * Imports
 */

var isNull = require('..')
var test = require('tape')

/**
 * Tests
 */

test('null should be null', function (t) {
  t.equal(isNull(null), true)
  t.end()
})

test('non null should not be null', function (t) {
  t.equal(isNull(1), false)
  t.equal(isNull('1'), false)
  t.equal(isNull(), false)
  t.equal(isNull({}), false)
  t.end()
})
