var express = require('express');
var router = express.Router();
var productsApiController = require('../../controllers/api/productsController');

router.get("/",productsApiController.quantityOfProducts);
router.get("/totalSales",productsApiController.totalAmountOfSales);
router.get("/categories",productsApiController.categories);
router.get("/lastProduct",productsApiController.lastProduct);

module.exports = router;