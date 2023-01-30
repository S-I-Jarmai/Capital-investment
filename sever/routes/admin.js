import express from "express";
import { activatedPlan, activatedWidraw, activatePlan, confirmWidrawal, deleteActiPlan, deleteActiWidraw, getAllActivatedPlans, getAllActivatedWidraw,  getRequestedPlans, getRequestedWidraw, getResetRecord, getUser, postUserProfit, profitUser, profitUserPut, resetUserPassword, searchmail } from "../controllers/admin.js";




const router = express.Router();

//Find User By Mail
router.get('/getuser', searchmail)

//Find User
router.get('/find/:id', getUser )

//Get All Request to Buy Plans,
router.get('/plan_request', getRequestedPlans)

//Admin to Activate Plan
router.put("/cfrmplan/:id", activatePlan )

// Post Activated Plans
router.post("/list_activate_plans", activatedPlan)

//getAllActivatedPlans
router.get("/get_acti_plans", getAllActivatedPlans)

//Delete getAllActivatedPlans
router.delete("/delete_acti_plans/:id", deleteActiPlan)

router.get('/widraw_request', getRequestedWidraw)
//Process Widraw 
router.put('/cfrwidraw/:id', confirmWidrawal)


//Post Activated Widraw 
router.post("/post_Widraw_Record", activatedWidraw)

//getAllActivated Widraw 
router.get("/get_Widraw_Record", getAllActivatedWidraw)

//Delete getAllActivated Widraw
router.delete("/delete_acti_widraw/:id", deleteActiWidraw )

// User Profit 
router.put('/userprofit/:id', profitUser)

//update user Profit 
router.put('/updateuserprofit/:id', profitUserPut)
//Post User Profit 
router.post('/postUserProfit', postUserProfit)

//Update User
router.put('/reset_password/:id', resetUserPassword)

//Get Reset Passwords Record
router.get('/getreset', getResetRecord)



export default router;
