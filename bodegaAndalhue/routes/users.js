var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

// LOGIN-REGISTER
router.get('/loginRegister', usersController.loginRegister);

// REGISTER
router.get('/register', usersController.register);

// LOGIN
router.get('/login', usersController.login);

module.exports = router;