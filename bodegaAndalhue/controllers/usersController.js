const bcrypt = require('bcryptjs');
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
                password: bcrypt.hashSync(req.body.password, 10)
            })
            .then(user => {
                req.session.usuarioLogueado = user;
                if (req.body.recordame != undefined) {
                    res.cookie('recordame', user.email, { maxAge: 6000000 })
                }
                res.redirect('/#register');
            })
    },

    login: (req, res, next) => {
        res.render('users/login');
    },

    enter: (req, res, next) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render("users/login", { errors: errors.errors })
        };
        db.User.findOne({
                where: {
                    email: req.body.email
                }
            }, {
                include: [{ association: "carts" }]
            })
            .then(function(user) {
                if (req.body.email == user.email) {
                    if (bcrypt.compareSync(req.body.password, user.password)) {
                        req.session.usuarioLogueado = user;
                        if (req.body.recordame != undefined) {
                            res.cookie('recordame', user.email, { maxAge: 6000000 })
                        }
                        res.redirect('/#session');
                    }
                } else {
                    res.render('users/login', { errorAlLoguear: "Usuario o contraseña inválidos!" });
                }
            })
    },

    profile: (req, res, next) => {
        db.User.findOne({
                where: {
                    email: req.session.usuarioLogueado.email
                }
            })
            .then(function(user) {
                res.render('users/profile', {
                    usuario: user
                });
            })
    },
    logOut: function(req, res) {
        req.session.destroy();
        res.redirect("/")
    }
}

module.exports = usersController;