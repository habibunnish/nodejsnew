let done=true

const isItDoneyet=new Promise((res,rej)=>{
    if(done){
        const workDone='here is the thing i built'
        res(workDone);
    }else{
        const why='still working on something else'
        rej(why);
    }
})
const checkIfItsDone=()=>{
    isItDoneyet.then(ok=>{
        console.log(ok)
    })
    .catch(err=>{
        console.error(err)
    })
}
checkIfItsDone()

//promisifying - its a way to use a classic js function that takes a callback and have it return a promise
const fs=require('fs');
const getFile=(filename)=>{
    return new promise((res,rej)=>{
        fs.readFile(filename,(err,data)=>{
            if(err){
                rej(err)
                return
            }
            resolve(data)
        })
    })
}

getFile('/etc/passwd')
.then(data=> console.log(data))
.catch(err=>console.error(err))

//chaining promise
const status=response=>{
    if(response.status>=200 &&response.status<300){
        return promise.resolve(response)
    }
    return promise.reject(new Error(response.statusText))
}
const json=response=>response.json()
fetch('/todos.json')
.then(status)
.then(json)
.then(data=>{
    console.log('request succeede with json response',data)
})
.catch(error=>{
    console.log('req failed'.error)
})

//orchestrating promises
/* 1- promise.all() = it helps u define a list of promise and execute something when they r alll resolved*/
const f1 = fetch('/something.json')
const f2 = fetch('/something2.json')

Promise.all([f1, f2])
  .then(res => {
    console.log('Array of results', res)
  })
  .catch(err => {
    console.error(err)
  })

  //or 
  Promise.all([f1, f2]).then(([res1, res2]) => {
    console.log('Results', res1, res2)
  })

  /* promsie.race()= runs when first promiises get settled and thn it runs the attached callback just once with result of first promise settled*/
  const first = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'first')
  })
  const second = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'second')
  })
  
  Promise.race([first, second]).then(result => {
    console.log(result) // second
  })

  /* promise.any() = when any of promise get fullfill or all promiise gets rejected ,it returns a single promise that resolves with the value from first promise thats is fulfilled */
  const firs = new Promise((resolve, reject) => {
    setTimeout(reject, 500, 'first')
  })
  const secon = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'second')
  })
  
  Promise.any([firs, secon]).catch(error => {
    console.log(error) // AggregateError
  })
  