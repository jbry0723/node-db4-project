const express=require('express');
const Ingredients=require("./ingredients-model")
const router=express.Router();

router.get('/:id/recipes', (req,res,next)=>{
    Ingredients.getRecipeByIngredient(req.params.id)
    .then(ingredientsList=>{
        res.status(200).json(ingredientsList)
    })
    .catch(next)
})



router.use((error, req, res, next)=>{
    res.status(500).json({ info: 'There was an error in the router',
  message: error.message,
  stack: error.stack})
  })

module.exports=router