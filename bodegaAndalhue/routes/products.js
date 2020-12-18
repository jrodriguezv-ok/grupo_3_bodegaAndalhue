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

const adminMiddleware = require('../middlewares/adminMiddleware');
const productsController = require('../controllers/productsController');
const cartController = require('../controllers/cartController');

// LISTADO DE PRODUCTOS
router.get('/list', adminMiddleware, productsController.list);

// AGREGAR PRODUCTO
router.get('/add', adminMiddleware, productsController.add);
router.post('/add',adminMiddleware, upload.any(), productsController.store);

// DETALLE PRODUCTO
router.get('/detail/:id', productsController.detail);

// EDITAR PRODUCTO
router.get('/edit/:id', adminMiddleware, productsController.edit);
router.post('/edit/:id', adminMiddleware, upload.any(), productsController.update);

// ELIMINAR PRODUCTO
/* router.get('/destroy/:id', productsController.destroy); */

// CARRITO DE COMPRAS
router.get('/cart/:id', cartController.destroyCartProduct);
router.get('/cart', cartController.showCart);
router.post('/cart', cartController.addProductToCart);
router.post('/cart/update', cartController.updateCartProduct);
router.post('/checkout', cartController.checkOut);

module.exports = router;