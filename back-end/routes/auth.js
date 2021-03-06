const express = require("express");
const User = require("../model/user");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verify  = require("../middleware/verify");
router.get('/login',(req,res)=>{
    User.findOne({email:req.body.email})
    .then(user=>{
        if (user){
            bcrypt.compare(req.body.password, user.password, (error,match)=>{
            if(error){
                res.status(400).json({error});
            }else if (match) {
                const token = jwt.sign({id:user._id, email: user._email}, "authorization" ,{
                    expiresIn: 60 * 60 * 12 * 24 
                } )
                res.status(200).json({msg:"You can login", token : token});
            }else{
                res.status(400).json({msg:"Incorrect password"});
            }
            })
        } 
        else
        {
            res.status(400).json({msg:"user does not exits"}); 
        }
        
    })
})
router.post('/signup',(req,res)=>{
    User.findOne({email:req.body.email})
    .then(user=>{
        if (user){
            res.status(400).json({msg:"user already exits"}); 
        } 
        
    })
    bcrypt.hash(req.body.password , 10 , (error , hash)=>{
        if(error)
        {
            res.status(400).json(error);
        }
        else 
        {
           const user = new User({
               email: req.body.email,
               password: hash
           });
           user.save()
           .then(user=>{
               res.status(200).json(user);
           })
           .catch(err=>{ 
               res.status(400).json(err);
           })

        }
    })   
})

router.get('/jwt-test' ,verify.verify, (req,res)=>{
    res.status(200).json({msg:"verify working"})
});
module.exports = router