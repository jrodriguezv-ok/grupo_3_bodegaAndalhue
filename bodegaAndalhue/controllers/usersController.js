const bcrypt = require('bcryptjs');
const { check, validationResult, body } = require('express-validator');
const db = require('../database/models');
const { Sequelize } = require('../database/models')
const Op = Sequelize.Op;
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


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
            })
            .then(function(user) {
                if (user !== null) {
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

    editProfile: (req, res, next) => {
        db.User.findByPk(req.params.id, {
                include: [{ association: "carts" }]
            })
            .then(function(user) {
                res.render('users/editProfile', { usuario: user })
            })
    },

    updateProfile: (req, res, next) => {
        console.log(req.body);
        db.User.findByPk(req.params.id, {
                include: [{ association: "carts" }]
            })
            .then(function(profile) {
                profile.address = req.body.address;
                profile.town = req.body.town;
                profile.country = req.body.country;
                profile.email = req.body.email;
                profile.password = bcrypt.hashSync(req.body.password, 10)
                db.User.update(profile, {
                        where: {
                            id: req.params.id
                        }
                    })
                    .then(function(updatedProfile) {
                        /*  console.log(updatedProfile.id); */
                        res.redirect('users/profile/${updatedProfile.id}')
                    })
            })
    },

    logOut: function(req, res) {
        req.session.destroy();
        res.clearCookie('recordame', { path: '/' })

        db.Product.findAll({
                include: [{ association: "categories" }, { association: "varietals" }, { association: "brands" }, { association: "qualities" }, { association: "displays" }, { association: "temperatures" }, { association: "states" }],
                where: {
                    state_id: 1,
                    discount: {
                        [Op.gt]: 0
                    }
                },
                limit: 6,
                order: [
                    ['id', 'DESC']
                ]
            })
            .then(function(products) {
                res.render('index', {
                    products: products,
                    toThousand
                })
            })
    }
}

module.exports = usersController;