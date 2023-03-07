const express = require("express");
const userRoute = require("./route/user.route");
const authRoute = require("./route/auth.route");
const productRoute = require("./route/product.route");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/product', productRoute);

module.exports = app;