const productList = require("../data/product.json");
const fs = require("fs");

/**
 * Create product and save it in json data file
 * @param {*} product the product to save
 */
exports.create = (product) => {
    productList.push(product);
    fs.writeFileSync("data/product.json", JSON.stringify(productList, null, 4));
}

/**
 * Retreive all products in data file
 * @returns all products
 */
exports.getAll = () => {
    return productList;
}

/**
 * Get one product by name
 * @param {String} name the name of product to find
 * @returns the product if found, or error if it does not exist
 */
exports.getOne = (name) => {
    let product = productList.find(product => product.name === name);
    if (product) {
        return product;
    } else {
        throw new Error("Produit non trouvé");
    }
}

exports.update = (product) => {
    let index = productList.findIndex(p => p.name === product.name);
    productList[index] = product;
    fs.writeFileSync("data/product.json", JSON.stringify(productList, null, 4));
}

exports.delete = () => {

}