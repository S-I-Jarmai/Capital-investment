import mongoose from "mongoose";

const BankDetailsSchema = mongoose.Schema({
    accnum:{
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
    }
},{timestamps:true}); 

export default mongoose.model("BankDetails", BankDetailsSchema)