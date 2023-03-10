const Product = require("./../model/product.model");
const fs = require("fs");

exports.getAll = async (req, res, next) => {
    let productList = await Product.find()
    res.status(200).json(productList);
}

exports.create = (req, res, next) => {
    const product = JSON.parse(req.body.product);
    Product.create({
        ...product,
        image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
        userid: req.token.id
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