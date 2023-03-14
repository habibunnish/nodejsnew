//how to log an object in nodejs
const obj={
    ma,e:'joe',
    age:23,
    person1:{
        name:'otnuy',
        age:32,
        person2:{
            name:'moni',
            age:33
        }
    }
}
console.log(obj);
console.log(JSON.stringify(obj.null,2));
//2 is for number of spaces to use fo indentation

require('util').inspect.defaultOptions.depth=null
console.log(obj);