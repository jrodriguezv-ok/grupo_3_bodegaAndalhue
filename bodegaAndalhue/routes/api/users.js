var express = require('express');
var router = express.Router();
var usersApiController = require('../../controllers/api/usersController');

router.get("/",usersApiController.quantityOfUsers);



module.exports = router;