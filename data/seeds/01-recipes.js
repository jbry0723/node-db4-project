
exports.seed = function(knex) {
return knex('recipes').insert([
        {recipe_name: 'Buttered Toast'}, //1
        {recipe_name: 'Chocolate Cake'}, //2
        {recipe_name: 'Roasted Pecans'} //3
      ]);
    
};
