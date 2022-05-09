const { Schema, model } = require("mongoose");

const menuSchema = new Schema({
  eightInch: { type: Number },
  tenInch: { type: Number },
  quarterSheet: { type: Number },
  halfSheet: { type: Number },
  individualPie: { type: Number },
  standardPie: { type: Number },
  dozenCupcakes: { type: Number },
  dozenCookies: { type: Number },
  other: [String],
  otherPrice: [String],
});

const Menu = model("Menu", menuSchema);

module.exports = Menu;
