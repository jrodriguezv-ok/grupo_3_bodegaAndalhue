const db = require('../database/models');
const { Sequelize } = require('../database/models')
const Op = Sequelize.Op;
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

var pedProducts = db.Product.findAll({
    include: [{ association: "categories" }, { association: "varietals" }, { association: "brands" }, { association: "qualities" }, { association: "displays" }, { association: "temperatures" }, { association: "states" }]
}, {
    where: {
        discount: {
            [Op.gt]: 0
        }
    },
    limit: 6
});

const mainController = {
    index: function(req, res, next) {
        pedProducts.then(function(products) {
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
    async search(req, res) {

        let products = await db.Product.findAll({
            where: {
                name: {
                    [Op.substring]: req.query.search
                }
            },
            limit: 12
        });
        return res.render('results', { products: products.sort(() => Math.random() - 0.5), search: req.query.search })
    }

}

module.exports = mainController;