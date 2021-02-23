let url = 'http://mylogger.io/log'

function log(message) {
    console.log("message sent to Logging system.")
}

//exported as object.
module.exports.log = log;
//OR
//exported as single fn
//module.exports = log

console.log(module)


