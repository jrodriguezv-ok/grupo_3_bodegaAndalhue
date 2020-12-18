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

    totalAmountOfSales: (req, res, next) => {
        db.Cart.findAll({
            include: ['carts'],
            where: {
                state: 0
            }
            })
            .then(function(carts) {
                for (let i= 0; i< carts.length; i++){
                    var totalAmountOfSales =+ carts[i].total
                }

                let respuesta = {
                    meta: {
                           status:200,
                           total: carts.length
                    },
                    data: totalAmountOfSales
                }
                 console.log( "La base cuenta con " + carts.length + " carritos cerrados")
                 console.log("el total en ventas es $" + totalAmountOfSales )
                 res.json(respuesta);
               })

    },

    categories: (req, res, next) => {
        db.Category.findAll()
            .then(function(categories) {
                let respuesta = {
                    meta: {
                           status:200,
                           total: categories.length
                    },
                    data: categories
                }
                 console.log( "La base cuenta con " + categories.length + " categorias")
                 res.json(respuesta);
               })

    },

    lastProduct: (req, res, next) => {
        db.Product.findAll({
            include: [{ association: "categories" }, { association: "varietals" }, { association: "brands" }, { association: "qualities" }, { association: "displays" }, { association: "temperatures" }, { association: "states" }]
        })
            .then(function(products) {
                var lastProduct = products[(products.length-1)];
                let respuesta = {
                    meta: {
                           status:200,
                           total: products.length
                    },
                    data: lastProduct
                }
                 res.json(respuesta);
               })

    }
};


module.exports = productsController;