/* soln = node filename.js joe   (in terminal)*/ 
process.argv.forEach((val,index)=>{
    console.log(`${index}:${val}`);
});
const args=process.argv.slice(2);


/* node filename.js name=joe */
const arguments=process.argv.slice(2);
arguments[0]
console.log(arguments);



/* installed minimist package  
 and we should use double dashes before each argument name
 node filename.js --name=joe
 */
const arg=require('minimist')(process.argv.slice(2));
arg['name'];
console.log(arg);

