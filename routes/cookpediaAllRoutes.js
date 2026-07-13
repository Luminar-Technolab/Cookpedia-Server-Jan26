const express = require('express')
const recipeController = require('../controllers/recipeController')
const feedbackController = require('../controllers/feedbackController')

const router = new express.Router()

//unauthorised routes
//get all recipes
router.get('/recipes',recipeController.getAllRecipes)
//add feedback
router.post('/feedbacks',feedbackController.addFeedback)


//authorised routes

module.exports = router