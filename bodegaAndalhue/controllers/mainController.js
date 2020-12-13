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
                limit: 6
            })
            .then(function(products) {
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
                                            addedToCart: addedToCart,
                                            toThousand
                                        })
                                    })
                            }
                        });

                } else {
                    res.render('index', {
                        products: products,
                        toThousand
                    });
                }
            })
            .catch(e => console.log(e));
    },
    search: async function(req, res, next) {
        let search = req.query.search;
        console.log(search);
        let varietals = db.Varietal.findAll({

            where: {
                name: {
                    [Op.substring]: req.query.search

                }
            },
            limit: 12
        }).then(function(varietals) {
            console.log(varietals);
            res.render('results', { varietals: varietals, search: req.query.search })

        });


    }


}

module.exports = mainController;