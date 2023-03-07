const productModel = require("./../model/product.model");

exports.getAll = (req, res, next) => {
    let productList = productModel.getAll();
    res.status(200).json(productList);
}

exports.create = (req, res, next) => {
    productModel.create({
        ...req.body,
        user: req.token.email
    });
    res.status(200).json({ message: "Produit créé" });
}