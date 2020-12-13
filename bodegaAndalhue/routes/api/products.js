var express = require('express');
var router = express.Router();
var productsApiController = require('../../controllers/api/productsController');

router.get("/",productsApiController.quantityOfProducts);



module.exports = router;