const express=require("express")
const {registerUser, logiUser} = require("../controllers/userControllers")
const { addUser, getUsers, getUser, editUser, deleteUser } = require("../controllers/userData")
const {  addProduct, getProducts, getProduct, editProduct, deleteProduct } = require("../controllers/productData")
const router=express.Router()


router.post("/",registerUser)
router.post("/login",logiUser)
// ================USER=========
router.post("/add",addUser)
router.get("/users",getUsers)
router.get("/:id",getUser)
router.patch("/:id",editUser)
router.delete("/:id",deleteUser)

router.post("/addproduct",addProduct)
router.get("/products",getProducts)
router.get("/:id",getProduct)
router.patch("/:id",editProduct)
router.delete("/:id",deleteProduct)
module.exports=router