const recipes = require('../models/recipeModel')

//get recipes
exports.getAllRecipes = async (req,res)=>{
    console.log("Inside getAllRecipes controller");
    const allRecipes = await recipes.find()
    res.status(200).json(allRecipes)
}

//view recipe
exports.viewRecipe = async (req,res)=>{
    console.log("Inside viewRecipe controller");
    const {id} =  req.params
    const recipeDetails = await recipes.findById({_id:id})
    res.status(200).json(recipeDetails)
}

//get relected recipes
exports.getAllRelatedRecipes = async (req,res)=>{
    console.log("Inside getAllRelatedRecipes controller");
    const {cuisine} = req.query
    const {id} = req.params
    const allRelatedRecipes = await recipes.find({cuisine,_id:{$ne:id}})
    res.status(200).json(allRelatedRecipes)
}