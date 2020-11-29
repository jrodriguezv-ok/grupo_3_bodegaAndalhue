const Sequelize = require('sequelize');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');

const cartController = {

    addProductToCart: (req, res) => {
        if (usuario) {
            var userId = req.session.usuario.id;
        }
        var quantity = req.body.quantity;
        console.log(quantity);
        db.Product.findByPk(req.body.id)
            .then(function(addedProduct) {
                    console.log(addedProduct)
                        /* 
                                            db.Cart_Product.create({
                                                 cart_id: 
                                                 product_id:

                                            }) */
                }

            )


    },

    showCart: (req, res) => {
        res.render('products/cart')

        /*  if (usuario) {
         db.Carritos.findOne({
                 where: {
                     usuario_id: usuarioId
                 },
                 include: [{ all: true, nested: true }]
             })
             .then(function(carrito) {
                 if (carrito == 'undefined') {
                     db.Carritos.create({
                     quantity: 0,
    user_id: usuarioId,
        creation_date: Date.now(),
        date_of_purchase: Date.now(),
        state: 'abierto'
        total: 0
})
}
})
} */
    }
};

module.exports = cartController;