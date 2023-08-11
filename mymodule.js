/*var fs = require('fs')
var path = require('path')
//var directory = process.argv[2]
//var filext = process.argv[3]
module.exports=function(directory,exact,callback){
fs.readdir(directory,function(err,files){
    if(err){
        return callback(err);
    }
    files.forEach(function (file) {
        if (path.extname(file) === exact) {
          console.log(file)
        }
    callback(null,files);
})
})
}
*/
const fs = require('fs')
const path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}