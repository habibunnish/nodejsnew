/*  stat() = its provided by fs module, you call it by passing a file path and once
 nodejs gets the file details it will call the callback function u pass 
 with 2 parameter an err mesage and the file stat */

 const fs=require('fs');
 fs.stat('/users/text.txt',(err,stats)=>{
    if(err){
        console.error(err);
        return 
    }
    stats.isFile(); 
    stats.isDirectory()
    stats.isSymbolicLink()
    stats.size;
 })