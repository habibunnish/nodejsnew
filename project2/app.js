/* nodemon = clean exit waiting for changes before restart */
console.log('program started');
let a=44;
let b=12;
console.log(a+b);

//email send;
const mailer=require('nodemailer');
let transport=mailer.createTransport({
    service:'gmail',
    auth:{
        user:'learncodewithhabi@gmail.com',
        pass:''
    }
})
let messageob={
    from:'learncodewithhab123@gamil.com',
    to:'durgeshkumar231@gmail.com',
    subject:'EMAIL USING NODEJS',
    text:'this mail is sending using nodejs'
}
transport.sendMail(messageob,(error,info)=>{
    if(error){
        console.log(error)
    }else{
        console.log('email sent successfully');
        console.log(info.res)
    }
})



