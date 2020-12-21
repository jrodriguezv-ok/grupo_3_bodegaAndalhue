const Sequelize = require('sequelize');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');

const cartController = {

    addProductToCart: (req, res) => {
        if (req.session.usuarioLogueado) {
            var userId = req.session.usuarioLogueado.id;
        }
        var quantity = req.body.quantity;
        db.Product.findByPk(req.body.id)
            .then(function(addedProduct) {
                db.Cart.findOne({
                        include: ['carts'],
                        where: {
                            user_id: userId,
                            state: 1 //carrito abierto
                        }
                    })
                    .then(function(cart) {
                        if (cart == undefined) {
                            db.Cart.create({
                                    user_id: userId,
                                    creation_date: new Date(),
                                    state: 1
                                })
                                .then(function(cart) {
                                    db.Cart_product.create({
                                            cart_id: cart.id,
                                            product_id: addedProduct.id,
                                            quantity: quantity,
                                            frozen_price: addedProduct.price
                                        })
                                        .then(function(cartProduct) {
                                            res.redirect('/#added')
                                        })
                                });
                        } else {
                            db.Cart_product.create({
                                    cart_id: cart.id,
                                    product_id: addedProduct.id,
                                    quantity: quantity,
                                    frozen_price: addedProduct.price - (addedProduct.price * (addedProduct.discount / 100))
                                })
                                .then(function(cartProduct) {
                                    res.redirect('/#added')
                                })
                        }
                    })
            })
    },

    showCart: (req, res) => {
        if (req.session.usuarioLogueado) {
            var userId = req.session.usuarioLogueado.id;
        }
        db.Cart.findOne({
                include: ['carts'],
                where: {
                    user_id: userId,
                    state: 1
                }
            })
            .then(function(cart) {
                let message = 'Tu carrito está vacio';
                if (cart == undefined) {
                    res.render('products/cart', { message: message }) //envía mensaje
                } else {
                    db.Cart_product.findAll({
                            include: [{ all: true, nested: true }],
                            where: {
                                cart_id: cart.id
                            }
                        })
                        .then(function(productCart) {
                            if (productCart.length == 0) {
                                res.render('products/cart', { message: message })
                            } else {
                                res.render('products/cart', {
                                    productCart: productCart,
                                    usuario: req.session.usuarioLogueado
                                })
                            }
                        })
                }
            })
    },

    destroyCartProduct: (req, res) => {
        db.Cart_product.destroy({
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.redirect('/products/cart');
        })
    },

    // ACTUALIZA CANTIDAD 
    updateCartProduct: (req, res) => {
        db.Cart_product.findOne({
                include: [{ all: true, nested: true }],
                where: {
                    id: req.body.id 
                }
            })
            .then(function(cartProductToUpdate) {
                db.Cart_product.update({
                        quantity: req.body.quantity
                    }, {
                        where: {
                            id: req.body.id
                        },
                        returning: true
                    })
                    .then(function(updatedCartProduct) {
                        res.redirect('/products/cart')
                    })
            })
    },

    // FINALIZA COMPRA
    checkOut: (req, res) => {
        if (req.session.usuarioLogueado) {
            var userId = req.session.usuarioLogueado.id;
        };
        db.Cart.findOne({
                include: ['carts'],
                where: {
                    user_id: userId,
                    state: 1
                }
            })
            .then(function(cart) {
                db.Cart_product.findAll({
                        include: [{ all: true, nested: true }],
                        where: {
                            cart_id: cart.id
                        }
                    })
                    .then(function(cartProduct) {
                        var quantityProd = cartProduct.length;
                        let total = req.body.totalCart;
                        db.Cart.update({
                                quantity: quantityProd,
                                date_of_purchase: new Date(),
                                state: 0, // carrito cerrado
                                total: total
                            }, {
                                where: {
                                    id: cart.id
                                }
                            })
                            .then(function(checkOut) {
                                res.render('products/checkout', {
                                    usuario: req.session.usuarioLogueado
                                })
                            })
                    })
            })
    }

};

module.exports = cartController;