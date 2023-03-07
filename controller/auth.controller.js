const bcrypt = require("bcrypt");
const userModel = require("./../model/user.model");
const jwt = require("jsonwebtoken");

exports.signin = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            try {
                userModel.create({
                    email: req.body.email,
                    password: hash
                });
                res.status(201).json({ message: "Utilisateur créé" });
            } catch (error) {
                res.status(500).json(error);
            }

        })
        .catch(error => {
            res.status(500).json(error);
        });

}

exports.login = (req, res, next) => {
    try {
        let user = userModel.getOne(req.body.email);
        bcrypt.compare(req.body.password, user.password)
            .then(success => {
                if (success) {
                    res.status(200).json({
                        email: user.email,
                        jwt: jwt.sign({
                            email: user.email
                        }, "d8a2123b708e4b2116b3b8f4b18ed499")
                    });
                } else {
                    res.status(401).json({ message: "Mot de passe incorrect" });
                }
            })
            .catch(error => {
                res.status(500).json(error);
            })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}