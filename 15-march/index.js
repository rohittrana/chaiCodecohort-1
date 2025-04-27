import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
import path from 'path';
import {db} from './utils/db.js'
import dotenv from 'dotenv';
dotenv.config('');

app.use(cors());
//import all routes

import userRoutes from './routes/user.routes.js';

const port  = process.env.PORT || 3000;
app.get('/testing', (req, res) => {
    res.send("msg hey there");
});
db();
// user routes

app.use('/api/v1/users',userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
