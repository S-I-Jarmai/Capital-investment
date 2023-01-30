import expess from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from './routes/user.js'
import planRoutes from './routes/plan.js'
import authRoutes from './routes/auth.js'
import adminRoutes from './routes/admin.js'
import bankRoutes from './routes/bankdetail.js'

import cookieParser from "cookie-parser";

const app = expess();
dotenv.config();

const connect = () =>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>{
        throw err
    })
}

app.use(cookieParser())
app.use(expess.json())
app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/users", userRoutes)
app.use("/api/plans", planRoutes)
app.use("/api/bankdetails", bankRoutes)

app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong...";
    return res.status(status).json({
        success:false,
        status,
        message
    })
})

app.listen(8800, ()=>{
    connect()
    console.log("Server is running...");
})