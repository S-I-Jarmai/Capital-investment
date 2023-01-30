import express from "express"
import { addBankDetails, deleteBankDetails, getBank, updateBankDetails } from "../controllers/bankdetail.js";
import verifyToken from "../verifyToken.js";

const router = express.Router();

//Add New Bank Details
router.post('/', verifyToken,addBankDetails )

//Get Bank Details
router.get('/find/bankdetails', getBank)

//Update Bank Details
router.put('/:id', verifyToken, updateBankDetails)


//Delete Bank Details
router.delete('/:id', verifyToken, deleteBankDetails)

export default router