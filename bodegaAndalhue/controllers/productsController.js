const fs = require('fs');


const productsController = {
    list: (req, res, next) => {
        res.render('products/list');
    },
    add: (req, res, next) => {
        res.render('products/add');
    },
    detail: (req, res, next) => {
        res.render('products/detail');
    },
    edit: (req, res, next) => {
        res.render('products/edit');
    },
    destroy: (req, res, next) => {

    },
    cart: (req, res, next) => {
        res.render('products/cart');
    }
}

module.exports = productsController;