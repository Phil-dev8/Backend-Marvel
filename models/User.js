const mongoose = require("mongoose");

const User = mongoose.model("User", {
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  favorites: Array,
  token: String,
  hash: String,
  salt: String,
});

module.exports = User;
