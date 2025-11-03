const express=require('express');
const app=express();
const {connectdb}=require("./config/database")
const User=require("./models/user");
const cookieParser=require("cookie-parser");
const {userAuth}=require('./middlewares/auth');

app.use(cookieParser());
app.use(express.json());

//manage  routers

const authRouter=require('./routes/auth');
const profileRouter=require('./routes/profile');
const requestRouter=require('./routes/request');

app.use('/',authRouter);
app.use('/',userAuth,profileRouter);
// app.use('/siii',(req,res)=>{
//     res.send("hi guys");
// })
// app.post('/signup',async(req,res)=>{
//     console.log("signup called");
//     try{
//       const {firstName,password,gender,age,email,city}=req.body;
//       const passHash=await bcrypt.hash(password,10);
//       const user=new User({
//           firstName,
//           password:passHash,
//           gender,age,email,city
//       });
//           await user.save();
//           res.send("user saved successfully")
//     }catch(err){
//           res.send("error"+err.message);
//     }

// } )
// app.get('/feed',(req,res)=>{
//         // const cityName=req.body.city;
//         // const user=await User.find({"city":"etah"});
//         // res.send(user);
//         res.send("hello world");
// });
// app.patch('/data',async(req,res)=>{
//       const userId=req.body.userId;
//        const data=req.body;
//        try{
//           await User.findByIdAndUpdate({_id:userId},data);
//           res.send("data upadted successfully");
//        }
//        catch{
//         res.send("error while updating");
//        }
// })
// app.post("/login",async(req,res)=>{
   
//     try {
//         const {email,password}=req.body;
//         const userMail=await User.findOne({email:email});
//         if(!userMail){
//             throw new Error("user email not found");
//         }
//         if(!validator.isEmail(email)){
//             throw new Error("wrong email ID");
//         }
//         const isPassword=await bcrypt.compare(password,userMail.password);
//         if(isPassword){
//             const token= await jwt.sign({_id:userMail._id},"madanMadar5632",)
//             res.cookie("token",token);
//             res.send("user login successfull");
//         }else{
//             throw new Error("incorrect password");
//         }
//     } catch (error) {
//         res.status(400).send("error: "+error.message);
//     }

// })
// app.get('/profile',userAuth,async(req,res)=>{
     
// })
connectdb()
   .then(()=>{
       console.log("database connection established");
       app.listen(80,'0.0.0.0',()=>{
         console.log("server started");
       })
   })
   .catch(()=>{
      console.log("can not connect to cluster;");
   })
