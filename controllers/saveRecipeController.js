const saveRecipes = require('../models/saveRecipeModel')

//save/add a recipe
exports.addRecipeToUserCollection = async (req,res)=>{
    console.log("Inside addRecipeToUserCollection controller" );
    const {id} = req.params
    const userMail = req.payload
    const {name,image} = req.body
    const existingRecipe = await saveRecipes.findOne({recipeId:id,userMail})
    if(existingRecipe){
        res.status(409).json("Recipe already present in your collection!!! Add another...")
    }else{
        const newRecipe = await saveRecipes.create({
        recipeId:id,name,image,userMail
        })
        res.status(201).json(newRecipe)
    }    
}

//get user recipe collection 
exports.getUserRecipeCollection = async (req,res)=>{
    console.log("Inside getUserRecipeCollection controller" );
    const userMail = req.payload
    const userCollection = await saveRecipes.find({userMail})
    res.status(200).json(userCollection) 
}

//remove recipe from user recipe collection 
exports.removeRecipeFromUserCollection = async (req,res)=>{
    console.log("Inside removeRecipeFromUserCollection controller" );
    const {id} = req.params
    const recipeDetails = await saveRecipes.findByIdAndDelete({_id:id})
    res.status(200).json(recipeDetails) 
}