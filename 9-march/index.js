import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import db from './utils/db.js';
dotenv.config();
// import all routes
import userRoutes from './routes/user.routes.js'
const port = process.env.PORT || 3000;
const app = express();

// ✅ Remove deprecated options from mongoose.connect()
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log("✅ MongoDB connected successfully"))
//     .catch((error) => console.log("❌ MongoDB connection error:", error));

app.use(cors({
               origin:process.env.BASE_URL,
               credentials:true,
               methods:["GET","POST","PUT","DELETE"],
               allowedHeaders:['Content-Type','Authorization']
}));
app.use(express.json());

app.get("/landing", (req, res) => {
    res.send("hey there");
});

app.get("/rohit", (req, res) => {
    res.send("hey there, I am Rohit");
});

app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid numbers provided");
    }

    const c = a + b;
    res.send(`Your answer is ${c} for values ${a} and ${b}`);
});


app.use('/api/vi/users',userRoutes);
// connect to db 
db();
app.listen(port, () => {
    console.log(` Server running on port ${port}`);
});
