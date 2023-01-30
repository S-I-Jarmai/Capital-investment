import express from "express";
import { buyPlan, reqWidraw, resetPassword } from "../controllers/user.js";
import verifyToken from "../verifyToken.js";

const router = express.Router();


//User Request to Buy Plan
router.post('/buy/:id', verifyToken,buyPlan )

//User Request to Widraw
router.post('/widraw/:id', verifyToken, reqWidraw )

//User Request to Deposite 
router.post('/reset', resetPassword)

export default router;