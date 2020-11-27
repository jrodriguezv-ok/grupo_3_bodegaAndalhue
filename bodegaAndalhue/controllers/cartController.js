const Sequelize = require('sequelize');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');

let usuarioId = req.session.usuario.id;

const cartController = {

    addProductToCart: (req, res) => {
        let cantidad = req.body.cantidad;
        db.Product.findByPk(req.body.id)
            .then(function(addedProduct) {

                }

            )


    },




    showCart: (req, res) => {
        if (usuario) {
            db.Carritos.findOne({
                    where: {
                        usuario_id: usuarioId
                    },
                    include: [{ all: true, nested: true }]
                })
                .then(function(carrito) {
                    if (carrito == 'undefined') {
                        db.Carritos.create({
                            /* quantity: 0, */
                            user_id: usuarioId,
                            creation_date: Date.now(),
                            date_of_purchase: Date.now(),
                            state: 'abierto'
                                /*  total: 0 */
                        })
                    }
                })

        }
    },








};

module.exports = cartConstroller;

/* cart: (req, res, next) => {
    res.render('products/cart');
} */

/* .then(function(carrito) {
    let cantidadAgregada = req.session.cantidad;
    res.render('products/cart', { carrito, cantidadAgregada })
}) */