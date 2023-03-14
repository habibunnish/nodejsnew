//static website creating

const url=require('url');
const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
/*
request
index
about
services */

const path=req.url
if(path=='/about'){
    console.log('about pages');
    res.writeHead(200,{
        'content-type':'text/html'
    });

    const filecontent=fs.readFileSync('./VIEWS/about.html');
    res.write(filecontent);
    res.end();

}
else if(path=='/'){
    console.log('homepage');
    res.writeHead(200,{
        'content-type':'text/html'
    });

    const filecontent=fs.readFileSync('./VIEWS/home.html');
    res.write(filecontent);
    res.end();

}else if(path=='/services '){
    console.log('services page');
    res.writeHead(200,{
        'content-type':'text/html'
    });

    const filecontent=fs.readFileSync('./VIEWS/services.html');
    res.write(filecontent);
    res.end();

}
}).listen(8080)