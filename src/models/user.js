const mongoose=require("mongoose");
const validator=require("validator");
const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        maxlength:20
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("weak password");
            }
        }
    },
    age:{
        type:Number,
        max:70
    },
    gender:{
        type:String,
        validate(value){
            if(value!="male" && value!="female"){
                throw new Error("wrong gender entered");
            }
        }
    },
    email:{
        type:String,
        validate(value){
             if(!validator.isEmail(value)){
                 throw new Error("wrong email entered");
             }
        }
    },
    city:{
        type:String
    }
})

const User=mongoose.model("User",userSchema);

module.exports=User;


