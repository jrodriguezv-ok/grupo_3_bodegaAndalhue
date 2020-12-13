const { validationResult } = require('express-validator');
const createError = require('http-errors');

const Sequelize = require('sequelize');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');

var pedProducts = db.Product.findAll({
    include: [{ association: "categories" }, { association: "varietals" }, { association: "brands" }, { association: "qualities" }, { association: "displays" }, { association: "temperatures" }, { association: "states" }]
});
var pedCategories = db.Category.findAll({ include: [{ association: "categories" }] });
var pedBrands = db.Brand.findAll({ include: [{ association: "brands" }] });
var pedVarietals = db.Varietal.findAll({ include: [{ association: "varietals" }] });
var pedQualities = db.Quality.findAll({ include: [{ association: "qualities" }] });
var pedDisplays = db.Display.findAll({ include: [{ association: "displays" }] });
var pedTemperatures = db.Temperature.findAll({ include: [{ association: "temperatures" }] });
var pedStates = db.State.findAll({ include: [{ association: "states" }] });

var promiseAll = Promise.all([pedCategories, pedBrands, pedVarietals, pedQualities, pedDisplays, pedTemperatures, pedStates]);

const productsController = {

    //LISTADO DE PRODUCTOS
    list: (req, res, next) => {
        db.Product.findAll({
                include: [{ association: "categories" }, { association: "varietals" }, { association: "brands" }, { association: "qualities" }, { association: "displays" }, { association: "temperatures" }, { association: "states" }]
            })
            .then(function(products) {
                if (req.session.usuarioLogueado != undefined) {
                    res.render('products/list', {
                        usuario: req.session.usuarioLogueado,
                        products: products,
                        toThousand
                    });
                } else {
                    res.render('products/list', {
                        products: products,
                        toThousand
                    });
                }
            })

    },


    //FORMULARIO AGREGAR PRODUCTO 
    add: (req, res, next) => {
        promiseAll.then(function([categories, brands, varietals, qualities, displays, temperatures, states]) {
                res.render('products/add', {
                    categories: categories,
                    brands: brands,
                    varietals: varietals,
                    qualities: qualities,
                    displays: displays,
                    temperatures: temperatures,
                    states: states
                });
            })
            .catch(e => console.log(e));
    },

    //GUARDAR PRODUCTO AGREGADO
    store: (req, res, next) => {
        /*    console.log(req.body); */
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            const newProd = req.body;
            newProd.cat_id = Number(req.body.category);
            newProd.brand_id = Number(req.body.brand);
            newProd.varietal_id = Number(req.body.varietal);
            newProd.quality_id = Number(req.body.quality);
            newProd.vintage = Number(req.body.vintage);
            newProd.display_id = Number(req.body.display);
            newProd.temperature_id = Number(req.body.temperature);
            newProd.price = Number(req.body.price);
            newProd.discount = Number(req.body.discount);
            newProd.image = req.files[0].filename;
            newProd.datasheet = req.files[1].filename;
            newProd.state_id = Number(req.body.state);

            /*  console.log(newProd) */
            db.Product.create(newProd)
                .then(product => {
                    res.redirect("/products/list")
                })
                .catch(e => console.log(e));
        } else {
            promiseAll.then(function([categories, brands, varietals, qualities, displays, temperatures, states]) {
                    res.render('products/add', {
                        categories: categories,
                        brands: brands,
                        varietals: varietals,
                        qualities: qualities,
                        displays: displays,
                        temperatures: temperatures,
                        states: states,
                        errors: errors.mapped(),
                        old: req.body
                    });
                })
                .catch(e => console.log(e));
        }
    },

    //DETALLE DE PRODUCTO
    detail: (req, res, next) => {
        var productSelected = req.params.id;
        db.Product.findByPk(productSelected, {
                include: [{ association: "categories" }, { association: "varietals" },
                    { association: "brands" }, { association: "qualities" }, { association: "displays" }, { association: "temperatures" }, { association: "states" }
                ]
            })
            .then(function(productSelected) {
                res.render('products/detail', { toThousand, productSelected });
            })
            .catch(e => console.log(e));
    },

    //FORMULARIO EDITAR PRODUCTO
    edit: (req, res, next) => {
        var productToEdit = db.Product.findByPk(req.params.id, {
            include: [{ association: "categories" }, { association: "varietals" },
                { association: "brands" }, { association: "qualities" }, { association: "displays" }, { association: "temperatures" }, { association: "states" }
            ]
        });
        productToEdit.then(function(productToEdit) {
                if (productToEdit != undefined) {
                    promiseAll.then(function([categories, brands, varietals, qualities, displays, temperatures, states]) {
                        res.render('products/edit', {
                            productToEdit: productToEdit,
                            categories: categories,
                            brands: brands,
                            varietals: varietals,
                            qualities: qualities,
                            displays: displays,
                            temperatures: temperatures,
                            states: states
                        });
                    })
                } else {
                    res.send('No se encontró su producto')
                }
            })
            .catch(e => console.log(e));
    },

    //ACTUALIZAR PRODUCTO
    update: (req, res, next) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Product.findByPk(req.params.id)
                .then(product => {
                    const updatedProd = req.body;
                    console.log(req.files[1]);
                    updatedProd.cat_id = Number(req.body.category);
                    updatedProd.brand_id = Number(req.body.brand);
                    updatedProd.varietal_id = Number(req.body.varietal);
                    updatedProd.quality_id = Number(req.body.quality);
                    updatedProd.vintage = Number(req.body.vintage);
                    updatedProd.display_id = Number(req.body.display);
                    updatedProd.price = Number(req.body.price);
                    updatedProd.discount = Number(req.body.discount);
                    updatedProd.image = req.files[0] != undefined ? req.files[0].filename : product.image;
                    updatedProd.datasheet = req.files[1] != undefined ? req.files[1].filename : product.datasheet;
                    updatedProd.state_id = Number(req.body.state);
                    console.log(updatedProd);
                    return db.Product.update(updatedProd, {
                        where: {
                            id: req.params.id
                        }
                    })
                })
                .then(updatedProd => {
                    res.redirect("/products/list")
                })
                .catch(e => console.log(e));
        } else {
            add.catch(e => console.log(e));
        }
    },

    //ELIMINAR PRODUCTO
    destroy: (req, res, next) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/products/list');
    }
};

module.exports = productsController;