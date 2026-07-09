const recipes = require('../models/recipeModel')

//get recipes
exports.getAllRecipes = async (req,res)=>{
    console.log("Inside getAllRecipes controller");
    const allRecipes = await recipes.find()
    res.status(200).json(allRecipes)
}