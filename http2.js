//GET http request body data using nodejs
const axios=require('axios');
axios.post('http://whatever.com/todos',{
    todo:'buy the milk'
})

//matching server side code
const express=require('express')
const app=express()
app.use(express.urlencoded({
    extended:true
})
)
app.use(express.json())
app.post('/todos',(req,res)=>{
    console.log(req.body.todo);
});


//listening to the stream data events
const server=http.createServer((req,res)=>{
    req.on('data',chunk=>{
        console.log(`data chunk available:${chunk}`)
    })
    req.on('end',()=>{
        //end of data
    })
});


//to access data we expect a string 
//to concatenate the chunk into a string when listening to the stream data and when the stream end we parse the string to json
const servers=http.createServer((req, res)=>{
    let data='';
    req.on('data',chunk=>{
        data +=chunk;
    })
    req.on('end',()=>{
        console.log(JSON.parse(data).todo);
        res.end();
    })
});



//simplify the example above
const Server=http.createServer(async(req,res)=>{
    const buffers=[];
    for await(const chunk of req){
        buffers.push(chunk);
    }
    const data=buffer.concat(buffers).toString();
    console.log(JSON.parse(data).todo);
    res.end()
})
