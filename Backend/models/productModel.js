const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  image: {
    type: String,

    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
  },
  cat: {
    type: String,
  },
  qunty: {
    type: String,
  },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
