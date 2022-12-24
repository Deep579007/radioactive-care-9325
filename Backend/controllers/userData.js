const User = require("../models/userModel");
const addUser = async (req, res) => {
    const user = new User({
      name: req.body.name,
      password:req.body.password,
      email: req.body.email,
      phone: req.body.phone,
    
     
    });
    const newUser = new User(user);
  
    try {
      const user = await newUser.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).send({ message: error });
    }
  };
  // ====================================GET METHOD=================================
const getUsers = async (req, res) => {
    try {
      const data = await User.find({});
      res.status(200).json(data);
    } catch (error) {
      res.status(400).send({ message: error });
    }
  };
  // ====================================PUT/PATCH METHOD=================================
  const getUser = async (req, res) => {
    try {
      const data = await User.find({ _id: req.params.id });
      res.status(200).json(data);
    } catch (error) {
      res.status(400).send({ message: error });
    }
  };
  
  const editUser = async (req, res) => {
    let user = req.body;
    let editUser = new User(user);
    try {
      await User.updateOne({ _id: req.params.id }, editUser);
      res.status(200).json(editUser);
    } catch (error) {
      res.status(400).send({ message: error });
    }
  };
  
  // ====================================DELETE METHOD=================================
  const deleteUser = async (req, res) => {
    try {
      await User.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: "DELETED" });
    } catch (error) {
      res.status(400).send({ message: error });
    }
  };
  module.exports = { addUser, getUsers, getUser, editUser, deleteUser };
  