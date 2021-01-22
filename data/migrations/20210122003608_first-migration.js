const { table } = require("../db-config");

exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl=>{
    tbl.increments('recipe_id');
    tbl.string('recipe_name',128).notNullable();
  })
  .createTable('ingredients',tbl=>{
      tbl.increments('ingredient_id')
      tbl.string('ingredient_name',128).notNullable();
  })
  .createTable('ingredients_lists', tbl=>{
      tbl.increments('ingredients_list_id')
      tbl.integer('recipe_id').unsigned().notNullable().references('recipe_id').inTable('recipes').onDelete('CASCADE')
      tbl.integer('ingredient_id').unsigned().notNullable().references('ingredient_id').inTable('ingredients').onDelete('CASCADE')
      tbl.float('quantity').unsigned().notNullable()
      tbl.string('quantity_units')
  })
  .createTable('instructions', tbl=>{
      tbl.increments('instruction_id')
      tbl.integer('recipe_id').unsigned().notNullable().references('recipe_id').inTable('recipes').onDelete('CASCADE')
      tbl.string('instruction_text',600).notNullable()
      tbl.integer('step_number').unsigned().notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema
  .dropTableIfExists('instructions')
  .dropTableIfExists('ingredients_lists')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};
