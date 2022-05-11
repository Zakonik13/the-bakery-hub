const { Schema, model } = require("mongoose");

const pieSchema = new Schema({
  links: [String],
  flavors: [String],
});

const Pie = model("Pie", pieSchema);

module.exports = Pie;
