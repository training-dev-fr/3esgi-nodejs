const productModel = require("./../model/product.model");
const fs = require("fs");

exports.getAll = (req, res, next) => {
    let productList = productModel.getAll();
    res.status(200).json(productList);
}

exports.create = (req, res, next) => {
    const product = JSON.parse(req.body.product);
    productModel.create({
        ...product,
        image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
        user: req.token.email
    });
    res.status(201).json({ message: "Produit créé" });
}

exports.update = (req, res, next) => {

    const product = JSON.parse(req.body.product);
    const dataProduct = productModel.getOne(product.name);
    if (dataProduct.user === req.token.email) {
        const image = dataProduct.image.split("/");
        fs.unlinkSync('images/' + image[image.length - 1]);
        productModel.update({
            ...product,
            image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
            user: dataProduct.user
        });
        res.status(201).json({ message: "Produit mis à jour" });
    } else {
        res.status(403).json({ message: "Vous n'avez pas les droits pour modifier ce produit" });
    }
}