const db = require('../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

var pedProducts = db.Product.findAll({
    include: [{ association: "categories" }, { association: "varietals" }, { association: "brands" }, { association: "qualities" }, { association: "displays" }, { association: "temperatures" }, { association: "states" }]
});

const mainController = {
    index: function(req, res, next) {
        pedProducts.then(function(products) {
            if (req.session.usuarioLogueado != undefined) {
                res.render('index', {
                    usuario: req.session.usuarioLogueado,
                    products: products,
                    toThousand
                });

            } else {
                res.render('index', {
                    products: products,
                    toThousand
                });
            }

        })
    }
}


module.exports = mainController;