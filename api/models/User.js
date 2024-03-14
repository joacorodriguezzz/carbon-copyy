const { string } = require("joi");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
    min: 6,
    max: 255,
  },
  lastName: {
    type: String,
    requred: false,
    min: 4,
    max: 20,
  },
  email: {
    type: String,
    required: false,
    min: 6,
    max: 1024,
  },
  password: {
    type: String,
    required: false,
    minlength: 6,
  },
  favoriteThemes: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("User", userSchema);
