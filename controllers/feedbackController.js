const feedbacks = require('../models/feedbackModel')

//add feedback
exports.addFeedback = async (req,res)=>{
    console.log("Inside addFeedback controller");
    const {name,email,message}  = req.body
    const newFeedback = await feedbacks.create({
        name,email,message
    })
    res.status(201).json(newFeedback)
}