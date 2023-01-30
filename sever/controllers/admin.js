import User from "../models/User.js"
import ReqToBuyPlan from "../models/ReqToBuyPlan.js"
import Widraw from "../models/Widraw.js"
import PlanActivitedRecord from "../models/PlanActivitedRecord.js"
import WidrawProcRecord from "../models/WidrawProcRecord.js"
import ProfitUserRCD from "../models/ProfitUserRCD.js"
import ResetPassword from "../models/ResetPassword.js"
import bcrypt from 'bcryptjs'




// Get a User by Mail
// Search video 
export const searchmail = async (req, res, next)=>{
    const query = req.query.q
    try {
      const videos = await User.find({email: {$regex: query, $options: "i"}});
      res.status(200).json(videos)  
    } catch (err) {
      next(err)
    }
  }

// Get a User
export const getUser = async (req, res, next)=>{
    try {
      const user = await User.findById(req.params.id)
      res.status(200).json(user)
    } catch (err) {
      next(err)
    }
}

//Get All Requested Plans
export const getRequestedPlans = async (req, res, next)=>{
    try {
        const plansRq = await ReqToBuyPlan.find().sort({createdAt: -1});
        res.status(200).json(plansRq)
    } catch (err) {
        next(err)
    }
}

//Get All Reset Password Record 
export const getResetRecord = async (req, res, next)=>{
    try {
        const restRecord = await ResetPassword.find().sort({createdAt: -1});
        res.status(200).json(restRecord)
    } catch (err) {
        next(err)
    }
}

//Active User Plan 
export const activatePlan = async (req, res, next) =>{
    try {
        const pucharsedPlan = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body
        })
        res.status(200).json(pucharsedPlan)
    } catch (err) {
        next(err)
    }
}
//Get All Requested Widraw
export const getRequestedWidraw = async (req, res, next)=>{
    try {
        const widrawRq = await Widraw.find().sort({createdAt: -1});
        res.status(200).json(widrawRq)
    } catch (err) {
        next(err)
    }
}

//Process User's Widrawal 
export const confirmWidrawal = async (req, res, next) =>{
    try {
        const widraw = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body
        })
        res.status(200).json(widraw)
    } catch (err) {
        next(err)
    }
}

// Post Activated Plans
export const activatedPlan = async (req, res, next)=>{
   const actiPlan = new PlanActivitedRecord({...req.body})
    try {
       const saveActiPlan = await actiPlan.save();
       res.status(200).json(saveActiPlan)
    } catch (err) {
       next(err)
    }
}

//Get All Post Activated Plans
export const getAllActivatedPlans = async (req, res, next)=>{
    try {
        const getAllPlans = await PlanActivitedRecord.find().sort({createdAt: -1});
        res.status(200).json(getAllPlans)
    } catch (err) {
        next(err)
    }
}

//Detele Acti Plan
export const deleteActiPlan = async (req, res, next) =>{
        try {           
            await ReqToBuyPlan.findByIdAndDelete(req.params.id)
            
            res.status(200)
            .json("Plan Request has been Deleted")
        } catch (err) {
            next(err)
        }
    
}

// Post Activated Widraw
export const activatedWidraw = async (req, res, next)=>{
    const actiWidraw = new WidrawProcRecord({...req.body})
     try {
        const saveActiWidraw = await actiWidraw.save();
        res.status(200).json(saveActiWidraw)
     } catch (err) {
        next(err)
     }
 }
 
 //Get All Activated Widraw
 export const getAllActivatedWidraw = async (req, res, next)=>{
     try {
         const getAllWidraw = await WidrawProcRecord.find().sort({createdAt: -1});
         res.status(200).json(getAllWidraw)
     } catch (err) {
         next(err)
     }
 }
 
 //Detele Acti Plan
 export const deleteActiWidraw = async (req, res, next) =>{
         try {           
             await Widraw.findByIdAndDelete(req.params.id)
             
             res.status(200)
             .json("Widraw Request has been Deleted")
         } catch (err) {
             next(err)
         }
     
 }

 //User Profit
export const profitUser = async (req, res, next) =>{
    try {
        const profitUser = await User.findByIdAndUpdate(req.params.id,{
            
            $inc:{availablebalance: req.body}
        })
        res.status(200).json(profitUser)
    } catch (err) {
        next(err)
    }
}

//User Profit
 export const profitUserPut = async (req, res, next) =>{
    try {
        const profitUser = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body
        })
        res.status(200).json(profitUser)
    } catch (err) {
        next(err)
    }
}

//Reset Password
export const resetUserPassword = async (req, res, next) =>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)
        const resetUser = await User.findByIdAndUpdate(req.params.id,{
            $set: hash
        })
        res.status(200).json(resetUser)
    } catch (err) {
        next(err)
    }
}




//Post User Profit
export const postUserProfit = async (req, res, next)=>{
   // const actiWidraw = new WidrawProcRecord({...req.body})
   const userProfit = new ProfitUserRCD({...req.body})
     try {
        const saveUserProfit = await userProfit.save();
        res.status(200).json(saveUserProfit)
     } catch (err) {
        next(err)
     }
 }

 //User Referrals
 export const referralsUser = async (req, res, next) =>{
    try {
        const profitUser = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body
        })
        res.status(200).json(profitUser)
    } catch (err) {
        next(err)
    }
}