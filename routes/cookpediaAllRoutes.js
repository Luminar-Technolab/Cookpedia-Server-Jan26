const express = require('express')
const recipeController = require('../controllers/recipeController')
const feedbackController = require('../controllers/feedbackController')
const userController = require('../controllers/userController')

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

module.exports = router