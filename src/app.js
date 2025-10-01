const express=require('express');
const app=express();
const pass='bhai yar padle,chup gandu'
// app.use('/',(req,res)=>{
//     res.send(`yes it is ${pass}`);
//     // // console.log(res);
//     // console.log("madan bhaiua");
// })
app.get('/test',(req,res)=>{
    // res.send(`le bhaiya}`);
    // // console.log(res);
    // console.log("madan bhaiua");
})
app.use('/',(req,res)=>{
    res.send(`yes it is ${pass}`);
    // // console.log(res);
    // console.log("madan bhaiua");
})
app.listen(3000,'0.0.0.0',()=>{
    console.log("oh yess fuck baby");
})