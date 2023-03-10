const mongoose = require('mongoose');
const { Schema } = mongoose;

const Product = new Schema({
  name:   String,
  price: Number,
  picture: String,
  userid: {type: String, ref: "User"}
});

module.exports = mongoose.model("Product",Product);