/* event loop by call stack */
const bar=()=>console.log('barr');
const baz=()=> console.log('bazz');
const foo=()=>{
    console.log('food');
    bar();
    baz();
}
foo();

/* queuing function by using settimeout to execute all other function and print bar function at last*/
const bars=()=>console.log('bars');
const buzz=()=> console.log('buzz');
const food=()=>{
    console.log('food');
    setTimeout(bars,0);
    buzz();
}
food();

/*  job queue  example which is a fastpass ticket  that lets u take another ride right after u finis the previous one*/
const bas=()=>console.log('bas');
const bam=()=> console.log('bam');
const fod=()=>{
    console.log('fod');
    setTimeout(bas,0);
    new Promise((resolve,reject)=>
    resolve('should be right after bam ,before bas')
    ).then(resolve=>console.log(resolve))
    bam();
}
fod();
