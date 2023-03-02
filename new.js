/* accept input from cli in nodejs*/

/* readline module */

const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question(`whats your name?`,name=>{
    console.log(`Hi ${name}!`);
    readline.close();
});

/* inquirer -lets u make multiple choices having button confirmation etc */

const inquirer=require('inquirer');
var question=[
    {
        type:'input',
        name:'name',
        message:'what is ur favourite food...?'
    }
]
inquirer.prompt(question).then(answers=>{
    console.log(`Hi ${answers['name']}!`);
});