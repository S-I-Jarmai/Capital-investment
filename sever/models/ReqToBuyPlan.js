import mongoose from "mongoose";

const ReqToBuyPlanSchema = mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
    },
    userEmail:{
        type: String,
        required: true,
    },
    userPhnumber:{
        type: Number,
        required: true,
    },
    userImg:{
        type: String,
    },
    planName:{
        type: String,
        required: true,
    },
    userdailyprofit:{
        type: String,
    },
    planAmount:{
        type: Number,
        required: true,
    },
    paymentImg:{
        type: String,
        required: true
    }   

},{timestamps:true});

export default mongoose.model("ReqToBuyPlan", ReqToBuyPlanSchema)