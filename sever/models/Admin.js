import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phonenumber:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
    },
    img:{
        type: String,
    },
    isAdmin:{
        type: Boolean,
        default: true
    }  
},{timestamps:true});

export default mongoose.model("Admin", AdminSchema)