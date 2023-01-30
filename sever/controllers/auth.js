import mongoose from "mongoose";
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import { createError } from "../error.js";
import jwt from "jsonwebtoken"
import Admin from "../models/Admin.js";


//Sign Admin Up
export const createAdmin = async (req, res, next) =>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newAdmin = new Admin({...req.body, password: hash});
        await newAdmin.save();
        res.status(200).json("Admin has been added...")
    } catch (err) {
        next(err)
    }
}

//Sign User UP
export const signup = async (req, res, next) =>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({...req.body, password:hash});       
        await newUser.save();
        res.status(200).json("User has been created...");
    } catch (err) {
        next(err)
    }
}

export const signin = async (req, res, next) =>{
    try {
        //Check Mail
        const user = await User.findOne({email: req.body.email})
        if(user){
        //Compare Password
        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isCorrect) return next(createError(400, "Wrong Credentials!"))

        const token = jwt.sign({id:user._id}, process.env.JWT)

        const {password, ...other} = user._doc;

        res.cookie("access_token", token, {
           httpOnly: true
        })
        .status(200)
        .json(other)
        }
        else if(!user){
            const admin = await Admin.findOne({email: req.body.email})
            if(!admin) return next(createError(404, "User not found!"))
            const isCorrect = await bcrypt.compare(req.body.password, admin.password)
            if(!isCorrect) return next(createError(400, "Wrong Credentials!"))
    
            const token = jwt.sign({id:admin._id}, process.env.JWT)
    
            const {password, ...other} = admin._doc;
    
            res.cookie("access_token", token, {
               httpOnly: true
            })
            .status(200)
            .json(other)
        }else{
            return next(createError(404, "User not found!"))
        } 
        
       

    } catch (err) {
        next(err)
    }
}




// export const signin = async (req, res, next) =>{
//     try {
//         //Check Mail
//         const user = await User.findOne({email: req.body.email})
//         if(!user) return next(createError(404, "User not found!"))
        
//         //Compare Password
//         const isCorrect = await bcrypt.compare(req.body.password, user.password)
//         if(!isCorrect) return next(createError(400, "Wrong Credentials!"))

//         const token = jwt.sign({id:user._id}, process.env.JWT)

//         const {password, ...other} = user._doc;

//         res.cookie("access_token", token, {
//            httpOnly: true
//         })
//         .status(200)
//         .json(other)

//     } catch (err) {
//         next(err)
//     }
// }