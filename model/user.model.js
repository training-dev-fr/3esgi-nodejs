const userList = require("./../data/user.json");
const fs = require("fs");

exports.create = (user) => {
    userList.push(user);
    fs.writeFileSync("data/user.json", JSON.stringify(userList, null, 4));
}

exports.getAll = () => {
    return userList.map(user => { return { email: user.email } });
}

exports.getOne = (email) => {
    let user = userList.find(user => user.email === email);
    if (user) {
        return user;
    } else {
        throw new Error("Utilisateur non trouvé");
    }
}

exports.update = () => {

}

exports.delete = () => {

}