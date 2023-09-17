require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  mongoURI: process.env.MONGODB_URI || "mongodb://127.0.0.1/bookstore",
};
