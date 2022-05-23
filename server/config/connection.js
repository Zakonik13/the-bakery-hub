const mongoose = require("mongoose");
require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;

console.log(process.env.MONGODB_URI, "check");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/3001", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
