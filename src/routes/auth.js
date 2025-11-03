//all auth aoutes are handled here
const express=require('express');
const authRouter=express.Router();
const User=require('../models/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')

authRouter.use(express.json());
authRouter.post('/signup',async(req,res)=>{
     try{
        const {username,firstName,age,city,gender,email,password}=req.body;
        
        const countUser=await User.countDocuments({username:username});
        if(countUser!=0){
            throw new Error("username already exists,think of something unique username");
        }
        const passHash=await bcrypt.hash(password,10);
        const user=new User({
            username,firstName,age,city,gender,email,password:passHash
        })
        await user.save();
        res.send('user saved successfully');
     } catch(err){
        res.status(400).send('error: '+err.message);
     }
});

authRouter.post('/login',async(req,res)=>{
    try{
        const {username,password}=req.body;
        const userData=await User.findOne({username:username});
        if(!userData){
            throw new Error('user does not exist,signup to register User');
        }
        const isPasswordCorrect=await bcrypt.compare(password,userData.password);
        if(!isPasswordCorrect){
            throw new Error('wrong password,try again')
        }
        const token=jwt.sign({username:userData.username},'madanMadar5632');
        res.cookie('token',token);
        res.send('user loggined successfully');
     } catch(err){
        res.status(400).send('error: '+err.message);
     }
});

authRouter.post('/logout',async(req,res)=>{
      res.cookie("token",null,{
        expires:new Date(Date.now()),
      });
      res.send("Logout Successfull!!!");
});


module.exports=authRouter;