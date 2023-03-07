const express = require("express");
const router = express.Router();
const productController = require("./../controller/product.controller");
const auth = require("./../middleware/auth");


router.get('/', auth, productController.getAll);
router.post('/', auth, productController.create);

module.exports = router;