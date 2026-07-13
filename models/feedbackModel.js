const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    }
})

const feedbacks = mongoose.model("feedbacks",feedbackSchema)
module.exports = feedbacks