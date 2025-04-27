import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config('');


export const db= ()=>{
               mongoose.connect(process.env.MONGO_URL).then(()=>{
                              console.log('mongoo is turn on ');
               }).catch((error)=>{
                              console.log('mongo is  low ');
               })
}