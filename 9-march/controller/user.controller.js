const registerUser = async (req,res)=>{
               const username = req.body.username;
               const email = req.body.email;
               const password = req.body.password;
               if(!username ||!email ||!password){
                              return status(401).send("error fill the credentials");
               }
              
}


export {registerUser};