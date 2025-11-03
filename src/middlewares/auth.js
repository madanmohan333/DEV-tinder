const jwt=require('jsonwebtoken');
const User=require('../models/user')

const userAuth=async(req,res,next)=>{
      try{
         const cookie=req.cookies;
         const {token}=cookie;
         const decodedObj=await jwt.verify(token,"madanMadar5632");
         const {username}=decodedObj;
         const userPresent=await User.findOne({username});
         if(!userPresent){
            throw new Error('user not found');
         }
         req.user=userPresent;
         next();
      }catch(err){
         res.status(400).send("error: Unauthorised access ("+err.message+")");
      }

}

module.exports={userAuth};