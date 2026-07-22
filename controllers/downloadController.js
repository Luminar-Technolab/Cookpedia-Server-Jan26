const downloads = require('../models/downloadModel')

//add to download list
exports.downloadRecipe = async (req,res)=>{
    console.log("Inside downloadRecipe controller");
    const {id} = req.params
    const userMail = req.payload
    const {name,image,cuisine} = req.body
    const exisitingRecipe = await downloads.findOne({recipeId:id})
    if(exisitingRecipe){
        exisitingRecipe.count += 1
        await exisitingRecipe.save()
        res.status(200).json(exisitingRecipe)
    }else{
        const newRecipe = await downloads.create({
            recipeId:id,name,cuisine,image,count:1,userMail
        })
        res.status(201).json(newRecipe)
    }
}

//get user downloadlist
exports.getUserDownloadList = async (req,res)=>{
    console.log("Inside getUserDownloadList controller");
    const userMail = req.payload
    const userDownloadList = await downloads.find({userMail})
    res.status(200).json(userDownloadList)
}

//get all downloadlist
exports.getAllDownloadList = async (req,res)=>{
    console.log("Inside getAllDownloadList controller");
    const allDownloadList = await downloads.find()
    res.status(200).json(allDownloadList)
}