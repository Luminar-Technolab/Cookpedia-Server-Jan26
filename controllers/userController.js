const users = require('../models/userModel')
const bcrypt = require('bcrypt')

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