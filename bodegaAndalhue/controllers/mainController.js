/* const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */

const db = require('../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    index: function(req, res, next) {
        db.Product.findAll()
            .then(function(products) {
                res.render('index', { products: products, toThousand })
            })
    }
}

module.exports = mainController;