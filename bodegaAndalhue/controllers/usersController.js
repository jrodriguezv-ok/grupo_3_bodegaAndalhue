const { check, validationResult, body } = require('express-validator');
const fs = require('fs');
const users = JSON.parse(fs.readFileSync(__dirname + "/../data/users.json"));

const usersController = {
    loginRegister: (req, res, next) => {
        res.render('users/loginRegister');
    },
    register: (req, res, next) => {
        res.render('users/register');
    },

    store: (req, res, next) => {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.render("users/register", { errors: errors.errors })
        }
        let newUser = req.body;
        if (users.length > 0) {
            let ultimoID = users[users.length - 1].id;
            newUser.id = ultimoID + 1;
        } else {
            newUser.id = 1;
        }
        users.push(newUser);
        fs.writeFileSync(__dirname + "/../data/users.json", JSON.stringify(users));
        res.render('users/register');
    },

    login: (req, res, next) => {
        res.render('users/login');
    },

    enter: (req, res, next) => {
        res.render('users/register');
    },
}

module.exports = usersController;