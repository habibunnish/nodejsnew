const eventEmitter=require('events');
const door= new eventEmitter()

//emit()
door.emit('slam');

//eventNames()
door.eventNames();

//getMaxListeners()
door.getMaxListeners();

//listenerCount()
door.listenerCount('open');

//on() = adds a callback function thats called when event is emitted
door.on('open',()=>{
    console.log('door was opened');
});

//once()= adds a callback function thats called when an event is emmited for the first time after registering this
const ee=new eventEmitter()
ee.once('my-event', ()=>{
    //call calback function once
});

//prependlistener()= using this leistener its added and called before other listeners

//removeallListerner()
const doSomethings=()=>{
    door.on('open',doSomethings);
    door.removeAllListeners('open',doSomethings);
};

