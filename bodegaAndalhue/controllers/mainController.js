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