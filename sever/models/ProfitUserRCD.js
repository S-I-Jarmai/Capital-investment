import mongoose from "mongoose";

const ProfitRecordSchema = mongoose.Schema({
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

export default mongoose.model("ProfitRecord", ProfitRecordSchema)



