require('dotenv').config();
const{TWILIO_ACCOUNT_SID , TWILIO_AUTH_TOKEN , VERIFICATION_SID} = process.env;
const twilio = require('twilio')(TWILIO_ACCOUNT_SID , TWILIO_AUTH_TOKEN); 
const express = require("express");
const router = express.Router();
router.get('/phone-otp' , async (req,res)=>{
    const channel = 'sms';
    let verificationRequest;
    try{
        verificationRequest = await twilio.verify.services(VERIFICATION_SID)
        .verifications
        .create({to: '+' + req.query.phone, channel});
        return res.status(200).send({msg:"otp sent succesfully"})
    }
    catch(e){
        console.error(e);
        return res.status(400).send({msg:error});
    }
})
module.exports = router;
