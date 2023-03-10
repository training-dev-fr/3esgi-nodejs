const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
  firstname:  {type: String, required: true},
  lastname: String,
  email:   String,
  password: String
});

module.exports = mongoose.model("User",User);