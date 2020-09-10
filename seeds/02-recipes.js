exports.seed = function (knex) {
  return knex("recipes").insert([
    {
      recipe: "Chicken Tika Masala",
    },
    { recipe: "Chicken Vindaloo" },
  ]);
};
