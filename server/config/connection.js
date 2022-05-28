const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bakery-hub", {
  useNewUrlParser: true,
});

module.exports = mongoose.connection;
