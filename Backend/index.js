const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const authConnection = require("./dataBase/db");
const userRoutes = require("./routes/userRoutes");
const addUser = require("./routes/userRoutes.js");
const getUsers = require("./routes/userRoutes.js");
const getUser = require("./routes/userRoutes.js");
const editUser = require("./routes/userRoutes.js");
// ===========PRODUSTS
const addProduct = require("./routes/userRoutes.js");
const getProducts = require("./routes/userRoutes.js");
const getProduct = require("./routes/userRoutes.js");
const editProduct = require("./routes/userRoutes.js");

const cors = require("cors");

const { notFound, errorHandler } = require("./MiddleWares/errorMiddleWare");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("FROM HOME");
});
const PORT = 8085;
app.use("/api/users", userRoutes);

// ==============USER===============
app.use("/", addUser);
app.use("/", getUsers);
app.use("/:id", getUser);
app.use("/:id", editUser);
// ==============PRODUCTS===============
app.use("/", addProduct);
app.use("/", getProducts);
app.use("/:id", getProduct);

app.use("/:id", editProduct);
authConnection();
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Runnig On http://localhost:${PORT}`);
});
