//http module createing server
const http=require("http");
const server=http.createServer((req,res)=>{
    /*
    req:- used for taking request
    res:- used for sending response
     */
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>HELLO EVERYONE WELCOME TO NODEJS </h1>');
    res.write('<button>click me</button>');
    res.end('byby');
})
server.listen(1306);