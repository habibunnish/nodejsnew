var path = require("path");

// Normalization
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

//format
console.log('format : '+ path.format({dir:'/users/joe',base:'test.tx'}))  

//isabsolute - returns true if its an absolute path
console.log('isabsolute :' + path.isAbsolute('/test/something'))  //true

//parse 
console.log('parse :' + path.parse('/users/test.txt')) 

// Join
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// Resolve
console.log('resolve : ' + path.resolve('path.js'));

// extName
console.log('ext name : ' + path.extname('path.js'));

//dirname
const notes='/user/joe/notes.txt'
path.dirname(notes);  //user/joe

//basename
path.basename(notes);  //notes.txt

//extname
path.extname(notes);   //txt

//basename+extname
path.basename(notes,path.extname(notes))  //notes


//readfile in nodejs fs.readfile() passing it the filepath encoding and a callback function that will be called with file data
const fs=require('fs');
fs.readFile('/users/joe/text.txt','utf8',(err,data)=>{
    if(err){
        console.error(err)
        return
    }
    console.log(data);
});

//fs.access()= will check if folder exist
//fs.mkdir() = to create a new folder
const fs=require('fs');
const foldername='/user/joe/test'
try{
    if(!fs.existsSync(foldername)){
        fs.mkdirSync(foldername)
    }
}catch(err){
console.error(err);
};

//to read content of directory =fs.readdir() , fs.readdirsync()
const fs=require('fs')
const folderpath='/users/joe'
fs.readdirSync(folderpath);

//to get full path
fs.readdirSync(folderpath).map(filename=>{
    return path.join(folderpath,filename)
});



//filter the result to return only files and exclude folders
const isfile=filename=>{
    return fs.lstatSync(filename).isfile()
}
fs.readdirSync(folderpath).map(filename=>{
    return path.join(folderpath,filename)
})
.filter(isfile);


//rename a folder= fs.rename() or fs.renameSync()
const fs=require('fs');
fs.rename('/users/joe','/users/roger',err=>{
    if(err){
        console.error(err)
        return
    }
    //done
});



//remove a folder = fs.rmdir() or fs.rmdirsync() 
// {recursive : true} = used to recursively remove the contents
const fs=require('fs')
fs.rmdir(dir, {recursive:true},(err)=>{
    if(err){
        throw err;
    }
    console.log(`${dir} is deleted !`);
});

//or
/*  we can use ( fs-extra ) module its a drop in replacement of fs module it provide more features */

const fs=require('fs-extra');
const folder='/users/joe'
fs.remove(folder,err =>{
    console.error(err);
});

//using async /await
async function removefoler(folder){
    try{
        await fs.remove(folder)
        //done
    }catch(err){
        console.error(err)
    }
}
const foler='/users/joe'
removefoler(folder);