//reading file from a disk
/*using nodejs we read a file and server it over http when a new connection is eastablished to ur http server */
const http=require('http');
const ffs=require('fs');
const server=http.createServer(function (req,res){
  ffs.readFile(__diraname + '/data.txt',(err,data)=>{
    res.end(data);
  })
})
server.listen(3001);




// get data from a readable stream
const Stream = require('stream')

const readableStream = new Stream.Readable({
  read() {}
})
const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

readableStream.pipe(writableStream)

readableStream.push('hi!');
readableStream.push('ho!');

readableStream.on('close',()=>writableStream.end());
writableStream.on('close',()=>console.log('ended'));

readableStream.destroy();

//to send data to a writable straeam
writableStream.write('hey!\n');



//create a transform stream
const {transform} =require('stream')
const transformstream=new transform();
transformstream._transform=(chunk , encoding , callback)=>{
  transformstream.push(chunk.toString().toUpperCase());
  callback();
}
//pipe readable stream
process.stdin.pipe(transformstream).pipe(process.stdout);