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

//add recipes
exports.addRecipe = async (req,res)=>{
    console.log("Inside addRecipe controller");
    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType} = req.body
    const existingRecipe = await recipes.findOne({name})
    if(existingRecipe){
        res.status(409).json("Recipe already added!!!")
    }else{
        const newRecipe = await recipes.create({
            name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType
        })
        res.status(201).json(newRecipe)
    }
}