const express = require("express");
const router = express.Router();
const productController = require("./../controller/product.controller");
const auth = require("./../middleware/auth");
const multer = require("./../middleware/multer");


router.get('/', auth, productController.getAll);
router.post('/', auth, multer, productController.create);
router.put('/', auth, multer, productController.update);

module.exports = router;