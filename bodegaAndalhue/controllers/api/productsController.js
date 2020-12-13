const Sequelize = require('sequelize');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../../database/models');


const productsController = {

    //LISTADO DE PRODUCTOS
    quantityOfProducts: (req, res, next) => {
        db.Product.findAll({
                include: [{ association: "categories" }, { association: "varietals" }, { association: "brands" }, { association: "qualities" }, { association: "displays" }, { association: "temperatures" }, { association: "states" }]
            })
            .then(function(products) {
                let respuesta = {
                    meta: {
                           status:200,
                           total: products.length
                    },
                    data: products
                }
                 console.log( "La base cuenta con " + respuesta.data.length + " productos cargados")
                res.json(respuesta);
               })

    },
};


module.exports = productsController;