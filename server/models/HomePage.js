const { Schema, model } = require("mongoose");

const homePageSchema = new Schema(
  {
    hero_image: {
      type: String,
    },
    home_paragraph1: {
      type: String,
    },
    home_paragraph2: {
      type: String,
    },
    home_paragraph3: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const HomePage = model("HomePage", homePageSchema);

module.exports = HomePage;
