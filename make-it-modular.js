/*var fs = require('fs')
var path = require('path')
//const mymodule = require('./mymodule.js')
var directory  =  process.argv[2]
var exact = '.'+process.argv[3]
const mymodule = require('./mymodule.js')
mymodule.exports = function (directory,exact, callback) {
fs.readdir(folder, function (err, files) {
    if (err) throw err;
    list = list.filter(function (file) {
      return path.extname(file) === '.' + exact;
    }
    )
  })
}
*/
'use strict'
const filterFn = require('./mymodule.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error(err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})


