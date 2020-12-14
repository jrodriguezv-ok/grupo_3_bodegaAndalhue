var express = require('express');
var router = express.Router();
const path = require('path');

const multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img/products')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
var upload = multer({ storage: storage });

const productsController = require('../controllers/productsController');
const cartController = require('../controllers/cartController');

// LISTADO DE PRODUCTOS
router.get('/list', productsController.list);

// AGREGAR PRODUCTO
router.get('/add', productsController.add);
router.post('/add', upload.any(), productsController.store);

// DETALLE PRODUCTO
router.get('/detail/:id', productsController.detail);

// EDITAR PRODUCTO
router.get('/edit/:id', productsController.edit);
router.post('/edit/:id', upload.any(), productsController.update);

// ELIMINAR PRODUCTO
/* router.get('/destroy/:id', productsController.destroy); */

// CARRITO DE COMPRAS
router.get('/cart/:id', cartController.destroyCartProduct);
router.get('/cart', cartController.showCart);
router.post('/cart', cartController.addProductToCart);
router.get('/checkout', cartController.checkOut);

module.exports = router;