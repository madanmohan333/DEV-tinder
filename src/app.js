const express=require('express');
const app=express();
const {connectdb}=require("./config/database")
const User=require("./models/user");

app.use(express.json());
app.post('/signup',async(req,res)=>{
      const data=req.body;
      const user=new User(data);
      try{
          await user.save();
          res.send("user saved successfully")
      }catch(err){
          res.send("error"+err.message);
      }

} )
app.get('/feed',async(req,res)=>{
        const cityName=req.body.city;
        const user=await User.find({"city":"etah"});
        res.send(user);
});
app.patch('/data',async(req,res)=>{
      const userId=req.body.userId;
       const data=req.body;
       try{
          await User.findByIdAndUpdate({_id:userId},data);
          res.send("data upadted successfully");
       }
       catch{
        res.send("error while updating");
       }
})


connectdb().
   then(()=>{
       console.log("database connection established");
       app.listen(3000,'0.0.0.0',()=>{
         console.log("server started");
       })
   })
   .catch(()=>{
      console.log("can not connect to cluster;");
   })
