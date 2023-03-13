//http GET request
const http=require('https');
const option={
    hostname:'example.com',
    port:443,
    path:'/todos',
    method:'GET'
}
const req=http.request(option,res=>{
    console.log(`statuscode: ${res.statusCode}`)
    res.on('data',d=>{
        process.stdout.write(d)
    })
})
req.on('error',error=>{
    console.error(error)
})
req.end();



//POST request
const https=require('https');
const data=new TextEncoder().encode(
    JSON.stringify({
        todo:'buy the milk'
    })
)
const options={
    hostname:'whatever.com',
    port:443,
    path:'/todos',
    method:'POST',
    headers:{
        'content-type':'application/json',
        'content-length':data.length
    }
}
const requ=https.request(options,res=>{
    console.log(`statuscode:${res.statusCode}`);
    res.on('data',d=>{
        process.stdout.write(d)
    })
})
requ.on('error',d=>{
    console.error(error);
})
requ.write(data);
requ.end();


//PUT Method
const HTTP=require('https');
const datas=new TextEncoder().encode(
    JSON.stringify({
        todo:'buy the milk'
    })
)
const optio={
    hostname:'whatever.com',
    port:443,
    path:'/todos',
    method:'PUT',
    headers:{
        'content-type':'application/json',
        'content-length':datas.length
    }
}
const reque=HTTP.request(optio,res=>{
    console.log(`statuscode:${res.statusCode}`);
    res.on('data',d=>{
        process.stdout.write(d)
    })
})
reque.on('error',d=>{
    console.error(error);
})
reque.write(data);
reque.end();



//DELETE method
const HTTPS=require('https');
const Datas=new TextEncoder().encode(
    JSON.stringify({
        todo:'buy the milk'
    })
)
const optionss={
    hostname:'whatever.com',
    port:443,
    path:'/todos',
    method:'DELETE',
    headers:{
        'content-type':'application/json',
        'content-length':Datas.length
    }
}
const   REQ=HTTP.request(optionss,res=>{
    console.log(`statuscode:${res.statusCode}`);
    res.on('data',d=>{
        process.stdout.write(d)
    })
})
REQ.on('error',d=>{
    console.error(error);
})
REQ.write(data);
REQ.end();


//using AXIOS Library
const axios=require('axios')
axios.post('https://whatever.com/todos',{
    todo:'buy the milk'
})
.then(res=>{
    console.log(`statuscode:${res.status}`)
    console.log(res);
})
.catch(error=>{
    console.error(error);
});

//post request is possible just using the nodejs standard modules
const Http=require('https');
const DATA=JSON.stringify({
    TODO:'BUY THE MILK'
})
const OPTION={
    hostname:'whatever.com',
    port: 443,
    path: '/todos',
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}
const requests=Http.request(OPTION,res=>{
    console.log(`statuscode:${res.statusCode}`);
    res.on('data',d=>{
        process.stdout.write(d)
    })
})
requests.write(data);
requests.end();



