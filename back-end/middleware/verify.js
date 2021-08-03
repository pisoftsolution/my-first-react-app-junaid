const jwt = require('jsonwebtoken');
const secret = 'authorization';
exports.verify= (req , res , next)=> {
    const token = req.headers.authorization;
    if(!token){
        res.status(400).json({msg:"There is no token provided"})
    } else{
        jwt.verify(token.split(" ")[1], secret, (err, value)=>{
            if (err){
                res.status(500).json({msg:"Authentication failed"})
            }
            else{
                next();
            }
        })
    }
}