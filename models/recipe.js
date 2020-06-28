const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const recipeSchema = new Schema({
  img: { type: String },
  ingredients: { type: Array },
  name: { type: String },
  qty: { type: Array },
  sourceURL: { type: String },
  units: { type: Array }
});

var Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
