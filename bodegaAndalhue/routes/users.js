var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

// LOGIN-REGISTER
router.get('/loginRegister', usersController.loginRegister);

// REGISTER
router.get('/register', usersController.register);
router.post('/register', usersController.store);

// LOGIN
router.get('/login', usersController.login);
router.post('/login', usersController.enter);

module.exports = router;