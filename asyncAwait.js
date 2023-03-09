//async and await function
const somethingAsync=()=>{
    return new Promise(res=>{
        setTimeout(()=>res('i did something'),2000)
    })
}
const something= async()=>{
    console.log(await somethingAsync())
}
console.log('before')
something()
console.log('after');

//promise all the things
/* writing async keyword to nay function means that the function will return a promise */
const afunction=async()=>{
    return 'test'
}
afunction().then(alert);

//or
const Afunction=()=>{
    return Promise.resolve('test')
}
Afunction().then(alert);