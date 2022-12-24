const Product = require("../models/productModel");

const addProduct = async (req, res) => {
  const product = new Product ({
    title: req.body.title,
    price: req.body.price,
    rating: req.body.rating,
    cat: req.body.cat,
    qunty: req.body.qunty,
    image: req.body.image,
  });
  const newProduct = new Product(product);

  try {
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
// ====================================GET METHOD=================================
const getProducts = async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
// ====================================PUT/PATCH METHOD=================================
const getProduct = async (req, res) => {
  try {
    const data = await Product.find({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

const editProduct = async (req, res) => {
  let product = req.body;
  let editProduct = new Product(product);
  try {
    await Product.updateOne({ _id: req.params.id }, editProduct);
    res.status(200).json(editProduct);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

// ====================================DELETE METHOD=================================
const deleteProduct = async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "DELETED" });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
module.exports = { addProduct, getProducts, getProduct, editProduct, deleteProduct };
