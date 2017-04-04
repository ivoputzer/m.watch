const {ok, deepEqual} = require('assert')

test('module.exports', function () {
  const exports = require('..')

  test('.watch', function () {
    test('has property watch', function () {
      ok(exports.hasOwnProperty('watch'))
    })
    test('watch equals to `fs.watch`', function () {
      deepEqual(require('..').watch, require('fs').watch)
    })
  })
})

test('bin', function () {
  test.skip('exposes `m.watch` binary', Function.prototype)
  test.skip('exposes `watch` binary', Function.prototype)
  test.skip('both binaries are executable', Function.prototype)
  test.skip('ignores hidden files and folders except ignore-files', Function.prototype)
})
