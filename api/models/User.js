const { string } = require("joi");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  lastName: {
    type: String,
    requred: true,
    min: 4,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  favoriteThemes: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
