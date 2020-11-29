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