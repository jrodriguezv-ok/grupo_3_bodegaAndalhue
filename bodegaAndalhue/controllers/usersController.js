const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator');
const db = require('../database/models');

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
        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            first_name: req.body.first_name,
            birthdate: req.body.birthdate,
            address: req.body.address,
            town: req.body.town,
            country: req.body.country,
            email: req.body.email,
            password: req.body.password,
        })
        User.password = bcrypt.hashSync(User.password, 10);
        res.render('users/register'); //ver cómo redirigir a la vista anterior: tienda o carrito
    },

    login: (req, res, next) => {
        res.render('users/login');
    },

    enter: (req, res, next) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render("users/login", { errors: errors.errors })
        };
        let userFind;
        db.User.findByPk(req.body.email, {
                include: [{ association: "carts" }]
            })
            .then(function(user) {
                if (user.email == req.body.email) {
                    if (bcrypt.compareSync(req.body.password, user.password)) {
                        userFind = user;
                    }
                }
            })
        if (userFind) {
            res.render('index', { userLogueado: userFind.first_name });
        } else {
            res.render("users/login", { errorAlLoguear: "Usuario o contraseña inválidos!" });
        }
    }
}

module.exports = usersController;