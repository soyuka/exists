'use strict'
const fs = require('fs')

/**
 * fs.exists is deprecated
 */
module.exports = function exists(path, cb) {
  return new Promise(function(resolve, reject) {
    fs.access(path, fs.F_OK, function(err) {
      let exist = err ? false : true
      if(cb)
        cb(exist)

      return resolve(exist)
    })
  })
}
