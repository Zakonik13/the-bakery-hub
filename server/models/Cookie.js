const { Schema, model } = require("mongoose");

const cookieSchema = new Schema({
  links: [String],
  flavors: [String],
});

const Cookie = model("Cookie", cookieSchema);

module.exports = Cookie;
