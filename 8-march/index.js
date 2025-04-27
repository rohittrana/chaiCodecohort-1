import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config('');
import {db} from './utils/db.js'
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
app.use(cors({
           origin:process.env.BASE_URL,
           methods:["GET",'POST','DELETE','OPTIONS'],
           allowedHeaders:['Content-Type','Authorization'],
           credentials:true
}
              
));

app.get('/hello',(req,res)=>{
               res.send("hey there");
})

app.get('/rohit',(req,res)=>{
               res.send('hey from rohit');
})
db();
app.listen(port,()=>{
               console.log(`server is runnnig on PORT ${port}`);
})