const { Schema, model } = require("mongoose");

const cakeSchema = new Schema({
  links: [String],
  themes: [String],
  flavors: [String],
});

const Cake = model("Cake", cakeSchema);

module.exports = Cake;
