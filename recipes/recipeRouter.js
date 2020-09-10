const express = require("express");

const Recipes = require("./recipe-helpers");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id/ingredients", (req, res) => {
  const { id } = req.params;
  Recipes.shoppingList(id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((error) => {
      res.status(500).json({ message: "Ingredients not found" });
    });
});
router.get("/ingredients/:id/recipes", (req, res) => {
  const { id } = req.params;

  Recipes.getIngredientRecipes(id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((error) => {
      res.status(500).json({ message: "Ingredients not found" });
    });
});

module.exports = router;
