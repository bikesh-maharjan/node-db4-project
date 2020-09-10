const db = require("../dbconfig");

module.exports = {
  getRecipes,
  shoppingList,
  getInstructions,
  getIngredientsRecipes,
};

function getRecipes() {
  return db("recipes");
}

function shoppingList(id) {
  return db("require_ingredients").where({ recipe_id: id });
}
function getInstructions(id) {
  return db("steps").where({ recipe_id: id });
}

function getIngredientsRecipes(id) {
  return db
    .select("recipe_id")
    .from("recipe_ingredients")
    .where({ ingredient_id: id });
}
