import mongoose, { model } from "mongoose";

const UserSchema = mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
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
        required: true
    },
    cfmpassword:{
        type: String,
        required: true
    },
    img:{
        type: String,
    },
    accname:{
        type: String,
        required: true,
    },
    accnumber:{
        type: Number,
        required: true,
    },
    bankname:{
        type: String,
        required: true,
    },
    totalamount:{
        type: Number,
        default: 0
    },
    availablebalance:{
        type: Number,
        default: 0
    },
    referralsbonus:{
        type: Number,
        default: 0
    },
    referredby:{
        type: String,
    },
    referrals:{
        type:[]
    },
    depositstatus:{
        type: String,
    },
    widrawalstatus:{
        type: String,
        default: "Nill"
    },
    planName:{
        type: String,
        
    },
    userdailyprofit:{
        type: String,
    },
    screateKey:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    }   
},{timestamps:true}); 

export default mongoose.model("User", UserSchema) 