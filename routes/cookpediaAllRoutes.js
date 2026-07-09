const express = require('express')
const recipeController = require('../controllers/recipeController')

const router = new express.Router()

//unauthorised routes
//get all recipes
router.get('/recipes',recipeController.getAllRecipes)

//authorised routes

module.exports = router