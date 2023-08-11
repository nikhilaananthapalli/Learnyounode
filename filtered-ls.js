var fs = require('fs')
var path = require('path')
//we have taken argv[2] because 0,1 paths are defined
// 0-bin to node path 
//1-script.js, 2-path,3-file extension
var folder  =  process.argv[2]
var ext = '.'+process.argv[3]
fs.readdir(folder, function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
      if (path.extname(file) === ext) {
        console.log(file)
      }
    })
  })