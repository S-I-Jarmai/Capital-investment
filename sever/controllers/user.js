import { createError } from "../error.js";
import User from "../models/User.js";
import Widraw from "../models/Widraw.js";
import ReqToBuyPlan from "../models/ReqToBuyPlan.js";
import ResetPassword from "../models/ResetPassword.js";


// Request To Buy Plan
export const buyPlan = async (req, res, next)=>{
    const plan = new ReqToBuyPlan({userId: req.body.id, ...req.body});
    try {
       const savePlan = await plan.save();
       res.status(200).json(savePlan)
    } catch (err) {
       next(err)
    }
}

//Request to Widraw
export const reqWidraw = async (req, res, next)=>{
    const widraw = new Widraw ({userId: req.body.id, ...req.body});
    try {
       const saveWidraw = await widraw.save();
       res.status(200).json(saveWidraw)
    } catch (err) {
       next(err)
    }
}

// export const reqWidraw = async (req, res, next)=>{
//    const widraw = new Widraw ({userId: req.body.id, ...req.body});
//    try {
//       const saveWidraw = await widraw.save();
//       res.status(200).json(saveWidraw)
//    } catch (err) {
//       next(err)
//    }
// }


//Reset Password
export const resetPassword = async (req, res, next)=>{
   const reset = new ResetPassword({...req.body});
   try {
      const saveReset = await reset.save();
      res.status(200).json(saveReset)
   } catch (err) {
      next(err)
   }
}
