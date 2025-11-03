//all profile routes are handled here
const express=require('express');
const profileRouter=express.Router();
const {validateEditProfileData}=require('../utils/validation');
profileRouter.get('/profile/view',async(req,res)=>{
       try{
              const user=req.user;
              res.send(user);
       }catch(err){
              res.send("error:"+err.message);
       }
});//get profile

profileRouter.patch('/profile/edit',async(req,res)=>{
       try{
              if(!validateEditProfileData(req)){
                     throw new Error('Invalid Error Request!!')
              };
              const loggedInUser=req.user;

       }
       catch(err){
              res.status(400).send("error: "+err.message);
       }
});//edit your profile


module.exports=profileRouter;