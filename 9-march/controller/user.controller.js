const registerUser = async (req,res)=>{
               const name = req.body.username;
               const email = req.body.email;
               const password = req.body.password;
               if(!username ||!email ||!password){
                              return res.status(401).json({
                                             msg:"Error you need fill all the requirement "
                              });
               }
              else{
               
              }
}


export {registerUser};