const http=require('http');
const url=require('url');

//url.parse()
http.createServer((req,res)=>{
console.log(req.url);
const urlobj=url.parse(req.url,true);
console.log(urlobj);
console.log(urlobj.query.key)

}).listen(8082)