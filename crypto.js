var crypto=require('crypto');
var mykey=crypto.createCipher('aes-128-cbc','password');
var mystr=mykey.update('34feb914c099df25794bf9ccb85bea72','utf8','hex');
mystr +=mykey.final('utf-8');
console.log(mystr);