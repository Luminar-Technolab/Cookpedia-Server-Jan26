const express = require('express')
const recipeController = require('../controllers/recipeController')
const feedbackController = require('../controllers/feedbackController')
const userController = require('../controllers/userController')
const saveRecipeController = require('../controllers/saveRecipeController')
const authenticationMiddleware = require('../middlewares/authenticationMiddleware')

const router = new express.Router()

//unauthorised routes

//get all recipes
router.get('/recipes',recipeController.getAllRecipes)
//add feedback
router.post('/feedbacks',feedbackController.addFeedback)
//register
router.post('/register',userController.register)
//login
router.post('/login',userController.login)


//authorised routes

// USER

//view recipe
router.get('/recipes/:id',authenticationMiddleware,recipeController.viewRecipe)
//get related recipes
router.get('/related-recipes/:id',authenticationMiddleware,recipeController.getAllRelatedRecipes)
//save recipes to user collection
router.post('/user-collection/:id',authenticationMiddleware,saveRecipeController.addRecipeToUserCollection)
//get user recipe collection
router.get('/user-collection',authenticationMiddleware,saveRecipeController.getUserRecipeCollection)
//delete item from user recipe collection
router.delete('/user-collection/:id',authenticationMiddleware,saveRecipeController.removeRecipeFromUserCollection)

module.exports = router