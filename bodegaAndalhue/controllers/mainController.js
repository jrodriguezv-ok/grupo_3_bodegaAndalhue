const db = require('../database/models');
const { Sequelize } = require('../database/models')
const Op = Sequelize.Op;
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {

    index: function(req, res, next) {
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
                    ['discount', 'DESC'],
                    ['id', 'DESC']                    
                ]
            })
            .then(function(products) {
                db.Brand.findAll({
                    include: [{association: "brands"}]
                })
                .then(function(brands){ 
                    if (req.session.usuarioLogueado != undefined) {
                        db.Cart.findOne({
                                include: ['carts'],
                                where: {
                                    user_id: req.session.usuarioLogueado.id,
                                    state: 1
                                }
                            })
                            .then(function(cart) {
                                if (cart == undefined) {
                                    let addedToCart = 0;
                                    res.render('index', {
                                        usuario: req.session.usuarioLogueado,
                                        products: products,
                                        brands:brands,
                                        addedToCart: addedToCart,
                                        toThousand
                                    })
                                } else {
                                    db.Cart_product.findAll({
                                            where: {
                                                cart_id: cart.id
                                            }
                                        })
                                        .then(function(cartProduct) {
                                            var addedToCart = cartProduct.length;
                                            res.render('index', {
                                                usuario: req.session.usuarioLogueado,
                                                products: products,
                                                brands:brands,
                                                addedToCart: addedToCart,
                                                toThousand
                                            })
                                        })
                                }
                            });

                    } else {
                        res.render('index', {
                            products: products,
                            brands:brands,
                            toThousand
                        });
                    }
                })
            })
            .catch(e => console.log(e));
    },
    search: function(req, res, next) {
        let search = req.query.search;
        db.Varietal.findAll({
            where: {
                name: {
                    [Op.substring]: search
                }
            },
            limit: 12
        }).then(function(varietals) {
            for (i = 0; i < varietals.length; i++) {
                db.Product.findAll({
                    include: [{ association: "categories" }, { association: "varietals" }, { association: "brands" }, { association: "qualities" }, { association: "displays" }, { association: "temperatures" }, { association: "states" }],
                    where: {
                        varietal_id: varietals[i].id,
                        state_id: 1
                    }
                }).then(function(idCoincidentes) {
                    var idCoincidentes = idCoincidentes;
                    let message = "No se encontró ningún producto con esta búsqueda"
                    if (idCoincidentes.length !== 0) {
                        res.render('results', { coincidentes: idCoincidentes, search, usuario: req.session.usuarioLogueado, toThousand })
                    } else {
                        res.render('results', { message: message, search, usuario: req.session.usuarioLogueado, toThousand })
                    }
                })
            }

        }).catch(function(req) {

        })
    }
}

module.exports = mainController;