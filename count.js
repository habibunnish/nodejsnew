/* when code written in terminal clear the terminal example */

console.clear();


/* counting element */

const x=1
const y=2
const z=3
console.count(
    'the value of x is ' + x +
    ' and has been checked ..how many times?'
    
);
console.count(
    'the value of y is ' + y +
    ' and has been checked  .. how many times?'
);
console.count(
    'the value of z is ' + z +
    ' and has been checked .. how many times'
);


/* example 2 */

const oranges=['orange','orange','orange'];
const apples=['just one apple'];
oranges.forEach(fruit=>{
    console.count(fruit);
});
apples.forEach(fruit=>{
    console.count(fruit);
});


/* reset counting */

const mango=['mango','mango'];
const grapes=['just grapes'];
mango.forEach(fruits=>{
    console.count(fruits);
});
grapes.forEach(fruits=>{
    console.count(fruits);
})
console.countReset('mango');

mango.forEach(fruits=>{
    console.count(fruits);
});

/*stack trace() */
const fun2=()=>console.trace();
const fun1=()=>fun2()
fun1();

/* calculating time spent*/

const doSomething = () => console.log('test');
const measureDoingSomething = ()=>{
    console.time('doSomething()');
    doSomething();
    console.timeEnd('doSomething()');
};
measureDoingSomething();

/*color the output */
console.log('\x1b[33m%s\x1b[0m','BUBBLY');

/* install chalk its a library  in addition to coloring it also helps with other styling facilities ex-text bold, italic,underlined */

// const chalk = require('chalk');
// console.log(chalk.yellow('hello'));

/*progress bar */ 
const progressbar=require('progress');
const bar=new progressbar(':bar',{total:10});
const timer=setInterval(()=>{
    bar.tick()
    if(bar.complete){
        clearInterval(timer);
    }
},100);