import mongoose, { model } from "mongoose";

const ResetPasswordSchema = mongoose.Schema({
    email:{
        type: String, 
        required: true
    },
    screateKey:{
        type: String,
        required: true
    }
},{timestamps:true}); 

export default mongoose.model('ResetPassword', ResetPasswordSchema)
