const express=require('express');
const app=express();
app.get('./writefile.js',(req,res)=>{
    res.send('Hi');
});
const server=app.listen(3000,()=>console.log('server ready'));
process.on('SIGTERM',()=>{
    server.close(()=>{
        console.log('process terminated successfully');
    });
});
process.kill(process.pid,'SIGTERM');