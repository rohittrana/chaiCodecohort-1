import mongoose from "mongoose";
import { stringify } from "querystring";


const userSchema = new mongoose.Schema({
               name:String,
               email:String,
               password:String,
               role:{
                              type:String,
                              enum:["user","admin"],
                              default:"user"
               },
               isVerifed:{
                              type:Boolean,
                              default:false
               },
               verificationToken:{
                              type:String,

               },
               resetPasswordToken:{
                              type:String,
                              
               },
               resetPasswordExpress:{
                              type:Date,
                              
               }
},{
               timestamps:true,
});

mongoose.model("User",userSchema);

export default User;