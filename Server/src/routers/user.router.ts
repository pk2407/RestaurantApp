import Router from "express"
import { sample_users } from "../data";
import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler'
import { User, UserModel } from "../models/user.model";
import bcrypt from 'bcryptjs'

const router=Router();


router.get("/seed",asyncHandler(
    async (req,res)=>{
     const usersCount=await UserModel.countDocuments();
     if(usersCount>0){
         res.send("User seed is already done");
     }
     await UserModel.create(sample_users);
     res.send("User seed iss Done");
 

 }))



router.post("/login",asyncHandler(
    async(req,res)=>{
        const {email,password}=req.body;
        const user = await UserModel.findOne({email,password});
    
        if(user){
            res.send(generateTokenResponse(user));
        }
        else{
            res.status(400).send("user name or password is not valid!");
        }
    }
))


router.post('/register', asyncHandler(
    async (req,res)=>{
        const{name,email,password,}=req.body;
        const user=await UserModel.findOne({email});
        if(user){
         res.status(400).send('User is already Exist');
         return;
        }
         const encryptedPassword=await bcrypt.hash(password,10);
         const newUser:User={
            id:'',
            name,
            email: email.toLowerCase(),
            password:encryptedPassword,
            isAdmin:false
         }

         const dbUser=await UserModel.create(newUser);
         res.send(generateTokenResponse(dbUser))
    }
))


const generateTokenResponse=(user:any)=>{
    const token=jwt.sign(
    {email:user.email, isAdmin:user.isAdmin },
     "Some Randowm texttttt",
     { expiresIn:"30d"
    });
user.token=token;
return user;
}

export default router;