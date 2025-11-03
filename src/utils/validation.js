
const validateSignUpData=(req)=>{
     const {firstName,LastName,Age,MobNo}=req.body;
     if(firstName.length){

     }
}
const validateEditProfileData=(req)=>{
     const allowedEditFields=["city","firstName","age","gender"];
     const isAllowed=Object.keys(req.body).every(field=>allowedEditFields.includes(field));
     
     return isAllowed;
}

module.exports={validateEditProfileData};
// const validateLoginData=(req)=>{
//     const
// }