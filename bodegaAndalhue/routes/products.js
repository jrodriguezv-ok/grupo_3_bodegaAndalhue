var express = require('express');
var router = express.Router();
const path = require('path');
const { check, validationResult, body } = require('express-validator');

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

// FILTRO POR LÍNEA
router.get('/line/:id', productsController.line);

// AGREGAR PRODUCTO
router.get('/add', adminMiddleware, productsController.add);
router.post('/add', adminMiddleware, upload.any(), [
    check("state").not().isEmpty().withMessage("Olvidaste el estado"),
    check("category").not().isEmpty().withMessage("Olvidaste la categoría"),
    check("brand").not().isEmpty().withMessage("Olvidaste la línea"),
    check("varietal").not().isEmpty().withMessage("Olvidaste el varietal"),
    check("quality").not().isEmpty().withMessage("Olvidaste la calidad"),
    check("vintage").not().isEmpty().withMessage("Olvidaste la añada"),
    check("display").not().isEmpty().withMessage("Olvidaste la presentación"),
    check("price").not().isEmpty().withMessage("Olvidaste el precio"),
    check("discount").not().isEmpty().withMessage("Olvidaste el descuento"),
    check("tasting").not().isEmpty().withMessage("Olvidaste la nota de cata"),
    check("pairing").not().isEmpty().withMessage("Olvidaste el maridaje"),
    check("temperature").not().isEmpty().withMessage("Olvidaste la temperatura"),
], productsController.store);

// DETALLE PRODUCTO
router.get('/detail/:id', productsController.detail);

// EDITAR PRODUCTO
router.get('/edit/:id', adminMiddleware, productsController.edit);
router.post('/edit/:id', adminMiddleware, upload.any(), [
    check("state").not().isEmpty().withMessage("Olvidaste el estado"),
    check("category").not().isEmpty().withMessage("Olvidaste la categoría"),
    check("brand").not().isEmpty().withMessage("Olvidaste la línea"),
    check("varietal").not().isEmpty().withMessage("Olvidaste el varietal"),
    check("quality").not().isEmpty().withMessage("Olvidaste la calidad"),
    check("vintage").not().isEmpty().withMessage("Olvidaste la añada"),
    check("display").not().isEmpty().withMessage("Olvidaste la presentación"),
    check("price").not().isEmpty().withMessage("Olvidaste el precio"),
    check("discount").not().isEmpty().withMessage("Olvidaste el descuento"),
    check("tasting").not().isEmpty().withMessage("Olvidaste la nota de cata"),
    check("pairing").not().isEmpty().withMessage("Olvidaste el maridaje"),
    check("temperature").not().isEmpty().withMessage("Olvidaste la temperatura"),
], productsController.update);

// ELIMINAR PRODUCTO
/* router.get('/destroy/:id', productsController.destroy); */

// CARRITO DE COMPRAS
router.get('/cart/:id', cartController.destroyCartProduct);
router.get('/cart', cartController.showCart);
router.post('/cart', cartController.addProductToCart);
router.post('/cart/update', cartController.updateCartProduct);
router.post('/checkout', cartController.checkOut);

module.exports = router;