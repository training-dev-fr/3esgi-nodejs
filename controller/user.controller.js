const User = require("../model/user.model");

exports.getAll = (req, res, next) => {
    User.find()
    .then(userList => {
        res.status(200).json(userList);
    })
    .catch(error => {
        res.status(500).json(error);
    })
}