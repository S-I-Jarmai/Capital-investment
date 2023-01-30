import express from "express";
import { addPlan, deletePlan, getPlan, getPlanID, updatePlan } from "../controllers/plan.js";
import verifyToken from "../verifyToken.js";

const router = express.Router();

//Add New Plan
router.post('/', verifyToken, addPlan )

//Get All Plans
router.get('/getplans', getPlan)

//Find Plans by Id
router.get('/find/:id', getPlanID)

//Update a Plan
router.put('/:id', verifyToken, updatePlan )


//Delete a Plan
router.delete('/:id', verifyToken, deletePlan)





export default router;