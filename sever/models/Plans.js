import mongoose, { model } from "mongoose";

const PlanSchema = mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
        unique: true
    },
    amount:{
        type: Number,
        required: true,
    },
    hour:{
        type: Number,
        required: true,
    },
    daily:{
        type: Number,
        required: true,
    },
    cycle:{
        type: Number,
        required: true,
    },
    totalprofit:{
        type: Number,
        required: true,
    },
    imgUrl:{
        type: String,
    }    
},{timestamps:true}); 

export default mongoose.model("Plan", PlanSchema) 