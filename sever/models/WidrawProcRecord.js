import mongoose from "mongoose";

const WidrawProcRecordSchema = mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        
    },
    accnumber:{
        type: Number,
        
    },
    accname:{
        type: String,
        
    },
    bankname:{
        type: String,
        
    },
    totalamount:{
        type: Number,
        
    },
    availablebalance:{
        type: Number,
        
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
        
    }
},{timestamps:true});

export default mongoose.model("WidrawProcRecord", WidrawProcRecordSchema)



