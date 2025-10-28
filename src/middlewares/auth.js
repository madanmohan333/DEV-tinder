const jwt=require('jsonwebtoken');
const User=require('../models/user')
const userAuth=async(req,res,next)=>{
      try{const cookie=req.cookies;
      const {token}=cookie;
      const decodedObj=await jwt.verify(token,"madanMadar5632");
      const {_id}=decodedObj;
      const isUserPresent=await User.findById({_id});
      if(isUserPresent){
         res.send("user found");
      }else{
        next(); 
      }}catch(err){
         res.status(400).send("error:"+err.message);
      }

}

module.exports={userAuth};