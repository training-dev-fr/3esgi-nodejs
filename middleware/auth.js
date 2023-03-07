const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        req.token = jwt.verify(token, "d8a2123b708e4b2116b3b8f4b18ed499");
        next();
    } catch (error) {
        res.status(401).json({ message: "Authentification incorrecte" });
    }
}