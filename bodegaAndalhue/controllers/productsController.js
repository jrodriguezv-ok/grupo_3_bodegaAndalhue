/* const fs = require('fs');
const path = require('path'); */

const Sequelize = require('sequelize');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');

var pedCategories = db.Category.findAll();
var pedLines = db.Line.findAll();
var pedVarietals = db.Varietal.findAll();
var pedQualities = db.Quality.findAll();
var pedDisplays = db.Display.findAll();
var pedTemperatures = db.Temperature.findAll();

const productsController = {
    list: (req, res, next) => {
        db.Product.findAll()
            .then(function(products) {
                res.render('products/list', { products: products, toThousand });
            })
    },

    add: (req, res, next) => {
        Promise.all([pedCategories, pedLines, pedVarietals, pedQualities, pedDisplays, pedTemperatures])
            .then(function([categories, lines, varietals, qualities, displays, temperatures]) {
                res.render('products/add', {
                    categories: categories,
                    lines: lines,
                    varietals: varietals,
                    qualities: qualities,
                    displays: displays,
                    temperatures: temperatures
                });
            });
    },

    store: (req, res, next) => {
        db.Product.create({
            cat_id: req.body.category,
            line: req.body.line,
            varietal: req.body.varietal,
            quality: req.body.quality,
            vintage: req.body.vintage,
            display: req.body.display,
            price: req.body.price,
            discount: req.body.discount,
            tasting: req.body.tasting,
            pairing: req.body.pairing,
            temperature: req.body.temperature,
            image: req.files[0].filename,
            datasheet: req.files[1].filename
        })
        res.redirect("/products/list");
    },

    detail: (req, res, next) => {
        var productSelected = req.params.id;
        db.Product.findByPk(productSelected, {
                include: [{ association: "categories" }, { association: "varietals" },
                    { association: "lines" }, { association: "qualities" }, { association: "displays" }, { association: "temperatures" }
                ]
            })
            .then(function(products) {
                productSelected = products;
                res.render('products/detail', { toThousand, productSelected });
            })
    },

    edit: (req, res, next) => {
        var productToEdit = db.Product.findByPk(req.params.id);
        Promise.all([productToEdit, pedCategories, pedLines, pedVarietals, pedQualities, pedDisplays, pedTemperatures])
            .then(function([products, categories, lines, varietals, qualities, displays, temperatures]) {
                productToEdit = products;
                if (productToEdit != undefined) {
                    res.render('products/edit', {
                        productToEdit: productToEdit,
                        categories: categories,
                        lines: lines,
                        varietals: varietals,
                        qualities: qualities,
                        displays: displays,
                        temperatures: temperatures
                    });
                } else {
                    res.send('No se encontró su producto')
                }
            })
    },

    update: (req, res, next) => {
        db.Product.update({
            cat: req.body.category,
            line: req.body.line,
            varietal: req.body.varietal,
            quality: req.body.quality,
            vintage: req.body.vintage,
            display: req.body.display,
            price: req.body.price,
            discount: req.body.discount,
            tasting: req.body.tasting,
            pairing: req.body.pairing,
            temperature: req.body.temperature,
            image: req.files[0].filename,
            datasheet: req.files[1].filename
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect("/products/list");
    },

    destroy: (req, res, next) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/products/list');
    },

    cart: (req, res, next) => {
        res.render('products/cart');
    }
};

module.exports = productsController;