import express from "express";
import { createAdmin, signin, signup } from "../controllers/auth.js";
import verifyToken from "../verifyToken.js";

const router = express.Router();

//Sign Admin Up 
router.post('/createadmin', createAdmin)

//Sign User Up
router.post('/signup', signup);

//Sign In
router.post('/signin', signin);


export default router;