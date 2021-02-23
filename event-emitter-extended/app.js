const EventEmitter = require('events');
const Logger = require('./logger');

const logger = new Logger();

//Register a Listener
logger.on('myEvent',(num1,num2) => {
    console.log("Event occured.")
    console.log("Sum is :", num1+num2)
})

logger.log("Log this message")



