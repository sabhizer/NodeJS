const EventEmitter = require('events')

class Logger extends EventEmitter {
    
    log(message) {
        console.log("Logged Message : ", message)

        this.emit('myEvent',1,2)
    }

}

module.exports = Logger