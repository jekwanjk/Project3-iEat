const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const recipeSchema = new Schema({
  imgURL: { type: String },
  ingredients: { type: Array },
  name: { type: String },
  qty: { type: Array },
  recipeURL: { type: String },
  units: { type: Array }
});

var Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
