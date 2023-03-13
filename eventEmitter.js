//the event handler is triggered and we get the console log
const EventEmitter=require('events');
const eventEmitter=new EventEmitter();
eventEmitter.on('start',()=>{
    console.log('started');
});
eventEmitter.emit('start');



//passing argu to the event handler by passing them as additional argu to emit()
eventEmitter.on('start',number=>{
    console.log(`started ${number}`)
});
eventEmitter.emit('start',23);



//multiple arguments
eventEmitter.on('start',(start,end)=>{
    console.log(`started from ${start}to ${end}`)
})
eventEmitter.emit('start',1,100);