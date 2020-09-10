exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("recipe", 255).notNullable().index().unique();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("ingredient_name", 255).notNullable().index().unique();
    })
    .createTable("recipe_ingredients", (tbl) => {
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT") // Restrict, CASCADE, SET Null, Do Nothing
        .onUpdate("CASCADE");

      tbl.integer("quantity").unsigned().notNullable();
    })
    .createTable("steps", (tbl) => {
      tbl.increments();
      tbl.integer("step_number").unsigned().notNullable();

      tbl.string("instructions", 255).notNullable();

      tbl
        .integer("recipe_id")
        .notNullable()
        .references("id")
        .inTable("receipes")
        .onDelete("RESTRICT") // Restrict, CASCADE, SET Null, Do Nothing
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
