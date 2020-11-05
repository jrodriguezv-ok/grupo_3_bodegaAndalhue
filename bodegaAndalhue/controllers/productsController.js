const fs = require('fs');
const path = require('path');

/*const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));*/

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require('../database/models');



const productsController = {
    list: (req, res, next) => {
        db.Products.findAll()
            .then(function(products) {
                res.render('products/list', { products: products, toThousand });
            })

    },
    add: (req, res, next) => {
        res.render('products/add');
    },
    store: (req, res, next) => {
        let newProduct = req.body;
        newProduct.image = req.files[0].filename;
        newProduct.datasheet = req.files[1].filename;
        if (products.length > 0) {
            let ultimoId = products[products.length - 1].id;
            newProduct.id = ultimoId + 1;
        } else {
            newProduct.id = 1;
        };
        newProduct.discount = Number(req.body.discount);
        products.push(newProduct);
        fs.writeFileSync(__dirname + "/../data/productsDB.json", JSON.stringify(products));
        res.redirect("/products/list");
    },
    create: (req, res, next) => {
        db.Products.create({
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

            image: req.body.image,

            datasheet: req.body.datasheet
        });
        res.redirect("/products/list");
    },

    detail: (req, res, next) => {
        var productSelected = req.params.id;
        db.Products.findByPk(req.params.id)
            .then(function(products) {
                res.render('products/detail', { products: products, toThousand, productSelected });
            })

        /* for (var i = 0; i < products.length; i++) {
            if (productSelected == products[i].id) {
                productSelected = products[i];
            };
        }; */

    },

    edit: (req, res, next) => {
        let productToEdit = db.products.findByPk(req.params.id)
            .then(function(products) {
                res.render('products/edit', { products: products });
            })
            /*  let productToEdit = req.params.id;
              for (var i = 0; i < products.length; i++) {
                  if (products[i].id == productToEdit) {
                      productToEdit = products[i];
                      break;
                  }
              };
              if (productToEdit != undefined) {
                  res.render('products/edit', { productToEdit })
              } else {
                  res.send('No se encontró su producto')
              };
              console.log(productToEdit);  */
    },
    update: (req, res, next) => {
        db.products.update({
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

            image: req.body.image,

            datasheet: req.body.datasheet
        }, {
            where: {

                id: req.params.id
            }
        });
        res.redirect("/products/list" + req.params.id);
        /* products.forEach(function(product) {
            if (product.id == req.params.id) {
                console.log(req.body);
                product.category = req.body.category;
                product.line = req.body.line;
                product.varietal = req.body.varietal;
                product.quality = req.body.quality;
                product.vintage = req.body.vintage;
                product.display = req.body.display;
                product.price = req.body.price;
                product.discount = req.body.discount;
                product.tasting = req.body.tasting;
                product.pairing = req.body.pairing;
                product.temperature = req.body.temperature;
                product.image = req.files[0].filename;
                product.datasheet = req.files[1].filename;
            }
        });
        console.log(products);

        fs.writeFileSync(__dirname + "/../data/productsDB.json", JSON.stringify(products));
        res.redirect("/products/list"); */
    },

    destroy: (req, res, next) => {
        /*   let newProducts = products.filter(function(product) {
              return product.id != req.params.id
          });

          fs.writeFileSync(__dirname + "/../data/productsDB.json", JSON.stringify(newProducts));
          res.redirect('/products/list'); */
        db.products.destroy({
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