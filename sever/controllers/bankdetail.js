import BankDetails from "../models/BankDetails.js";



//Add New Bank Details
export const addBankDetails = async (req, res, next)=>{
    const newBankDetails = new BankDetails({userId: req.body.id, ...req.body});
    try {
       const saveBankDetails = await newBankDetails.save();
       res.status(200).json(saveBankDetails)
    } catch (err) {
       next(err)
    }
}

//Get Bank Details
export const getBank = async (req, res, next)=>{
    try {
      const bank = await BankDetails.find();
      res.status(200).json(bank)
    } catch (err) {
      next(err)
    }
  }

//Update Bank Details
export const updateBankDetails = async (req, res, next) =>{
    try {
        const updateBankDetail = await BankDetails.findByIdAndUpdate(req.params.id,{
            $set: req.body
        })
        res.status(200).json(updateBankDetail)
    } catch (err) {
        next(err)
    }
}

// Delete Bank Details
export const deleteBankDetails = async (req, res, next)=>{
    try {
        const bankDetail = await BankDetails.findById(req.params.id);
        if(!bankDetail) return next(createError(404, "bankDetails not found!"))
           await BankDetails.findByIdAndDelete(req.params.id)
           res.status(200).json("Video has been deleted!")     
      
    } catch (err) {
        next(err)
    }
}
