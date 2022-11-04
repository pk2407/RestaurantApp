import { dbConnect } from './configs/database.config';

import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";

import foodrouter from './routers/food.router';
import userRouter from "./routers/user.router";


dbConnect();

const app = express();
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));



app.use("/api/foods",foodrouter);
app.use("/api/users",userRouter);

const port =5000;
app.listen(port,()=>{
    console.log("Server is running on http://localhost:"+port)
})


