exports.seed = function (knex) {
  return knex("steps").insert([
    {
      recipe_id: 1,
      instructions: "Combine Chicken and Curry Sauce",
      step_number: 1,
    },
  ]);
};
