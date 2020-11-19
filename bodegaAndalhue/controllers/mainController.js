/* const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */

const db = require('../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

var pedProducts = db.Product.findAll();
var pedCategories = db.Category.findAll();
var pedBrands = db.Brand.findAll();
var pedVarietals = db.Varietal.findAll();
var pedQualities = db.Quality.findAll();
var pedDisplays = db.Display.findAll();
var pedTemperatures = db.Temperature.findAll();
var pedStates = db.State.findAll();

var promiseAll = Promise.all([pedProducts, pedCategories, pedBrands, pedVarietals, pedQualities, pedDisplays, pedTemperatures, pedStates]);

const mainController = {
    index: function(req, res, next) {
        promiseAll.then(function([products, categories, brands, varietals, qualities, displays, temperatures, states]) {
            res.render('index', {
                products: products,
                categories: categories,
                brands: brands,
                varietals: varietals,
                qualities: qualities,
                displays: displays,
                temperatures: temperatures,
                states: states,
                toThousand
            });
        })
    }
}


module.exports = mainController;


/* {
    index: function(req, res, next) {
        promiseAll.then(function([products, categories, brands, varietals, qualities, displays, temperatures, states]) {
            res.render('index', {
                products: products,
                categories: categories,
                brands: brands,
                varietals: varietals,
                qualities: qualities,
                displays: displays,
                temperatures: temperatures,
                states: states,
                toThousand
            });
        })
    }
} */