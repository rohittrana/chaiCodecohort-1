import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config('');

export const db =()=>{
               mongoose.connect(process.env.MONGO_URL).then(()=>{
                              console.log('mongodb is connected ')
               }).catch((err)=>{
                              console.log('mongo db is not connected')
               })
}