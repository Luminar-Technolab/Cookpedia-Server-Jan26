const users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//register
exports.register = async (req,res)=>{
    console.log("Iniside register controller");
    const {username,email,password} = req.body
    const existingUser = await users.findOne({email})
    if(existingUser){
        res.status(409).json("Account Already exists... Please Login!!!")
    }else{
        const encryptPassword = await bcrypt.hash(password,10)
        const newUser = await users.create({
            username,email,password:encryptPassword
        })
        res.status(201).json(newUser)
    }
}

//login
exports.login = async (req,res)=>{
    console.log("Iniside login controller");
    const {email,password} = req.body
    const existingUser = await users.findOne({email})
    if(existingUser){
        const isPasswordMatch = await bcrypt.compare(password,existingUser.password)
        if(isPasswordMatch){
            const token = jwt.sign({userMail:email,role:existingUser.role},process.env.JWT_SECRET)
            res.status(200).json({user:existingUser,token})
        }else{
            res.status(409).json("Authentication failed... Incorrect Password!!!")
        }
    }else{
       res.status(409).json("Account Doesnot exists... Please Register!!!")
    }
}

//user profile update
exports.editUserProfile = async (req,res)=>{
    console.log("Iniside editUserProfile controller");
    const uploadPictureFile = req.file
    const {id} = req.params
    const existingUser = await users.findById({_id:id})
    existingUser.picture = uploadPictureFile.filename
    await existingUser.save()
    res.status(200).json(existingUser)
}

//get all user list
exports.getUserList = async (req,res)=>{
    console.log("Iniside getUserList controller");
    const allUsers = await users.find({role:{$eq:"user"}})
    res.status(200).json(allUsers)
}