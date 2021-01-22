const express=require('express');
const Recipe=require("./recipebook-model")
const router=express.Router();

router.get('/', (req,res,next)=>{
    Recipe.getRecipes()
        .then(action=>{
            res.status(200).json(action)
        })
        .catch(next)
})

router.get('/:id/shoppinglist', (req,res,next)=>{
    Recipe.getShoppingList(req.params.id)
    .then(recipeinfo=>{
        res.status(200).json(recipeinfo)
    })
    .catch(next)
})

router.get('/:id/instructions', (req,res,next)=>{
    Recipe.getInstructions(req.params.id)
    .then(instructionslist=>{
        res.status(200).json(instructionslist)
    })
    .catch(next)
})



router.use((error, req, res, next)=>{
    res.status(500).json({ info: 'There was an error in the router',
  message: error.message,
  stack: error.stack})
  })

module.exports=router