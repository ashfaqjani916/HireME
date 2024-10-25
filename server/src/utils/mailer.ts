const nodemailer = require('nodemailer');


interface MailingDetails {
  emailID: string;
  emailBody: string;
}

export  const sendReferralEmail = async({  emailID , emailBody }:MailingDetails)=>{

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
      user:process.env.sender,
      pass: process.env.passcode
    }
  })

  
let details = {
  from: process.env.sender,
  to:emailID,
  subject:"Refer and Earn ",
  text:emailBody,
}

transporter.sendMail(details,(err:any)=>{
  if(err){
    console.error(err)
  }
  else{
    console.log("email has been sent successfully");
  }
})
}

