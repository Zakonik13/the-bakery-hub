const { Schema, model } = require("mongoose");

const cakeImageSchema = new Schema({
  link: {
    type: String,
  },
});

const CakeImage = model("CakeImage", cakeImageSchema);

module.exports = CakeImage;
