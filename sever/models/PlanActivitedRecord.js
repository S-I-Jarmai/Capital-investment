import mongoose from "mongoose";

const PlanActivitedRecord = mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    userName:{
        type: String,
      
    },
    planName:{
        type: String,
      
    },
    userdailyprofit:{
        type: String,
    },
    planAmount:{
        type: Number,
      
    },
    paymentImg:{
        type: String,
      
    },
    userImg:{
        type: String,
      
    },
    userPhnumber:{
        type: Number,
      
    },
    userEmail:{
        type: String,
    }    
},{timestamps:true});

export default mongoose.model("PlanActivitedRecord", PlanActivitedRecord)