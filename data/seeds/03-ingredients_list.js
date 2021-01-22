
exports.seed = function(knex) {
 
      return knex('ingredients_lists').insert([
        {recipe_id:1,ingredient_id:2, quantity:2,quantity_units:'cups'},
        {recipe_id:1,ingredient_id:4, quantity:1,quantity_units:'stick'},
        {recipe_id:1,ingredient_id:5, quantity:.25,quantity_units:'cups'},
        {recipe_id:2,ingredient_id:1, quantity:.3,quantity_units:'gallon'},
        {recipe_id:2,ingredient_id:2, quantity:.5,quantity_units:'lbs'},
        {recipe_id:2,ingredient_id:4, quantity:1,quantity_units:'stick'}
        
      ]);
    
};
