var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')


/* GET home page. */
router.get('/', mainController.index);
//SEARCH//
router.get('/search/:id', mainController.search);


module.exports = router;