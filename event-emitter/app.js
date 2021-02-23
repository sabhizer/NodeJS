//EventEmitter is a class.
const EventEmitter = require('events')

//create object of the class.
const eventEmitterObj = new EventEmitter()

//Register a Listener
eventEmitterObj.on('myEvent',(num1,num2) => {
    console.log("Event occured.")
    console.log("Sum is :", num1+num2)
})

//Raise an event.
eventEmitterObj.emit('myEvent',1,2)