const { Schema, model } = require("mongoose");

const cupcakeSchema = new Schema({
  link: {
    type: String,
  },
  themes: [String],
  flavors: [String],
});

const Cupcake = model("Cupcake", cupcakeSchema);

module.exports = Cupcake;
