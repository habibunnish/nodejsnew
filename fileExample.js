/* file operation
1-read file
2-writefile
3-appendfile
4-deletefile
*/ 
const fs=require("fs");
//for synchronous read file
fs.readFileSync('./new.txt');
//for asynchronous read file
fs.readFile('./new.txt',(error,data)=>{
    if(error){
        console.log('error display');
        console.log(error);
    }else{
        console.log(data.toString());
    };
});
console.log("terminated");

/////////////////////////////////////////////////////////////

//for writefile example

let content="THIS IS A DYNAMIC CONTENT";
//writefile.txt is written and while running the content was placed on this file 
//created newfile automatically
fs.writeFile('writefile.txt',content,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('saved');
    }
});

//////////////////////////////////////////////

//appendfile example


fs.appendFile('./new.txt','\n new content adding in this file by using appendfile',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("appendfile saved");
    }
});

///////////////////////////////////////////////////////////

//deletefile example
//file get deleted 

fs.unlink('./new.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('deleting ');
    }
})