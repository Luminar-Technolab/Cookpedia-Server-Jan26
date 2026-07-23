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

//get all feedbacks
exports.getAllFeedbacks = async (req,res)=>{
    console.log("Inside getAllFeedbacks controller");
    const allFeedbacks = await feedbacks.find()
    res.status(200).json(allFeedbacks)
}

//update feedback status
exports.updateFeedbackStatus = async (req,res)=>{
    console.log("Inside updateFeedbackStatus controller");
    const {id} = req.params
    const {status} =  req.body
    const updateFeedback = await feedbacks.findById({_id:id})
    updateFeedback.status = status
    await updateFeedback.save()
    res.status(200).json(updateFeedback)
}

//get all approve feedbacks
exports.getAllapproveFeedbacks = async (req,res)=>{
    console.log("Inside getAllapproveFeedbacks controller");
    const allFeedbacks = await feedbacks.find({status:{$eq:'approve'}})
    res.status(200).json(allFeedbacks)
}