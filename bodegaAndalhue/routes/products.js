var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

// LISTADO DE PRODUCTOS
router.get('/list', productsController.list);

// AGREGAR PRODUCTO
router.get('/add', productsController.add);
/* router.post('/add', productsController.store); */

// DETALLE PRODUCTO
router.get('/detail/:id', productsController.detail);

// EDITAR PRODUCTO
router.get('/edit/:id', productsController.edit);
/* router.post('/edit/:id', productsController.update); */

// ELIMINAR PRODUCTO
router.get('/destroy/:id', productsController.destroy);

// CARRITO DE COMPRAS
router.get('/cart', productsController.cart);

module.exports = router;