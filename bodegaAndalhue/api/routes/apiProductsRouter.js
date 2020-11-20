const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

//controlador
const apiProductsController = require('../../api/controllers/productsController');

//multer
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img/products')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
var upload = multer({ storage: storage });

//rutas
router.get('/cantidadUsuarios', apiProductsController.cantidadUsuarios);
router.get('/cantidadProductos', apiProductsController.cantidadProductos);
router.get('/cantidad', apiProductsController.categories);

module.exports = router;