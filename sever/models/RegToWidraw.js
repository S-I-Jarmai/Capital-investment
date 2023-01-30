import mongoose from "mongoose";

const WidrawSchema = mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        required: true
    },
    accnumber:{
        type: Number,
        required: true
    },
    accname:{
        type: String,
        required: true
    },
    bankname:{
        type: String,
        required: true
    },
    totalamount:{
        type: Number,
        required: true
    },
    availablebalance:{
        type: Number,
        required: true
    },
    img:{
        type: String,
        
    }, 
    email:{
        type: String,
        required: true
    },   
    phonenumber:{
        type: Number,
        required: true
    },
    widrawalstatus:{
        type: String,
        required: true
    }
},{timestamps:true});

export default mongoose.model("Widraw", WidrawSchema)