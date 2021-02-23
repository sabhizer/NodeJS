const os = require('os');
const path = require('path')
const fs = require('fs')

//OS Module
var totalMemory = os.totalmem()
var freeMemory = os.freemem()
console.log(totalMemory)
console.log(freeMemory)
console.log("============")

//Path Module
var pathObj = path.parse(__filename)
console.log(pathObj)
console.log("============")

//Fs Module
//Synchronous function
var myfiles = fs.readdirSync('./')
console.log(myfiles)
//Asynchronous function (preferred)
fs.readdir('./adsasd', function(err, files) {
    if (err) console.log("Error : ", err)
    else console.log("Files : ", files)
})
console.log("============")


