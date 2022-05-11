const { Schema, model } = require("mongoose");

const extraSchema = new Schema({
  product: String,
  link: String,
  flavor: String,
  theme: String,
  qty: String,
  price: Number,
});

const Extra = model("Extra", extraSchema);

module.exports = Extra;
