require('dotenv').config();
const{SENDGRID_API_KEY, SENDGRID_EMAIL} = process.env;
const sgMail = require("@sendgrid/mail");
const express = require("express");
const router = express.Router();
sgMail.setApiKey(SENDGRID_API_KEY);

router.get('/email-otp',(req,res)=>{
    if(!req.query.email){
        return res.status(400).send({msg:'Enter the email'});
    }
    const otp = Math.floor(100000 + Math.random()*900000);
    const msg = {
        to : req.query.email, 
        from : SENDGRID_EMAIL,
        subject : "Six Digit OTP",
        text : "Random OTP",
        html : `<h3>Random Otp</h3> 
        <pre>This is an Random OTP ${otp}</pre>`
    }
    sgMail.send(msg)
    .then(info=>{
        console.log(info);
        res.status(200).send({msg:"OTP generated successfully"})
    })
    .catch(err=>{
        console.error(err.response.body);
        res.status(400).send({msg:"Otp not generated"})
    })
})

module.exports = router
