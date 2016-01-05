const exists = require('./index.js')
const assert = require('assert')

describe('exists', function() {
  it('should exist (promise)', function() {
    return exists('./package.json')
    .then(function(exist) {
      assert(exist)
      return Promise.resolve()
    })
  })

  it('should exist (callback)', function(cb) {
    return exists('./package.json', function(exist) {
      assert(exist) 
      cb()
    })
  })

  it('should not exist (promise)', function() {
    return exists('./nonexistant')
    .then(function(exist) {
      assert(!exist)
      return Promise.resolve()
    })
  })

  it('should not exist (callback)', function(cb) {
    return exists('./nonexistant', function(exist) {
      assert(!exist)
      cb()
    })
  })
})
