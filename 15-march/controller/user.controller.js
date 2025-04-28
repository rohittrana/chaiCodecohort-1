import User from '../model/User.model.js';
import crypto from 'crypto';
export const registerUser = async(req,res)=>{
               
              const name = req.body.name;
              const email = req.body.email;
              const password = req.body.password;

               if(!name|| !email|| !password){
                              return res.status(400).json({
                                             msg:"All field are required"
                              })
               }
             try{
              const existingUser = await User.findOne({email})
              if(existingUser){
                  return res.status(400).json({
                              message:"user already exists"
                  })
              }
              const user =  await User.create({
               name,
               email,
               password
              })
              console.log(user);
              if(!user){
               return res.status(400).json({
                              msg:"User not registered",
               })
              }
             const token =  crypto.randomBytes(32).toString('hex');
             console.log(token);
             user.verificationToken= token;

              await user.save();
              
             }catch(error){}
};


 