const { appendFile } = require("fs-extra");

USER_ID=8778943495;
// console.log(USER_ID)
USER_KEY="HABIBUNNISHA";
NODE_ENV="development";

process.env.USER_ID;
process.env.USER_KEY;
process.env.NODE_ENV;


//in express u can use this to set different error handles per environments
if(process.env.NODE_ENV==='development'){
    appendFile.use(express.errorHandler({dumpExceptions:true , showTrack:true}))
}
if(process.env.NODE_ENV ==='production'){
    appendFile.use(express.errorHandler());
};

