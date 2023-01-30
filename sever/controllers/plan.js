import Plans from "../models/Plans.js";



//Add New Plan
export const addPlan = async (req, res, next)=>{
    const newPlan = new Plans({userId: req.body.id, ...req.body});
    try {
       const savePlan = await newPlan.save();
       res.status(200).json(savePlan)
    } catch (err) {
       next(err)
    }
}

//Get All Plans
export const getPlan = async (req, res, next)=>{
    try {
        const plans = await Plans.find().sort({amount: 1});
        res.status(200).json(plans)
    } catch (err) {
        next(err)
    }
}

//Get Plans by Id
export const getPlanID = async (req, res, next)=>{
    try {
        const plan = await Plans.findById(req.params.id)
        res.status(200).json(plan)
    } catch (err) {
        next(err)
    }
}


//Update Plan 
export const updatePlan = async (req, res, next) =>{
    try {
        const updatePlan = await Plans.findByIdAndUpdate(req.params.id,{
            $set: req.body
        })
        res.status(200).json(updatePlan)
    } catch (err) {
        next(err)
    }
}

// Delete a Plan
export const deletePlan = async (req, res, next)=>{
    try {
        const plan = await Plans.findById(req.params.id);
        if(!plan) return next(createError(404, "Plan not found!"))
           await Plans.findByIdAndDelete(req.params.id)
           res.status(200).json("Video has been deleted!")     
      
    } catch (err) {
        next(err)
    }
}
