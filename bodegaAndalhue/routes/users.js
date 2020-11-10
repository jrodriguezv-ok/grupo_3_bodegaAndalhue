var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')
const { check, validationResult, body } = require('express-validator');

// LOGIN-REGISTER
router.get('/loginRegister', usersController.loginRegister);

// REGISTER
router.get('/register', usersController.register);
router.post('/register', [
    check("first_name").isLength({ min: 2, max: 50 }).withMessage("Nombre inválido"),
    check("last_name").isLength({ min: 2, max: 50 }).withMessage("Apellido inválido"),
    check("birthdate").isDate().withMessage("Fecha inválida"),
    check("address").not().isEmpty().withMessage("Olvidaste tu dirección"),
    check("town").not().isEmpty().withMessage("Olvidaste tu localidad"),
    check("country").not().isEmpty().withMessage("Olvidaste tu país"),
    check("email").isEmail().withMessage("Email inválido"),
    check("password").not().isEmpty().withMessage("Olvidaste la contraseña")
], usersController.store);

// LOGIN
router.get('/login', usersController.login);
router.post('/login', [
    check("email").isEmail().withMessage("Email inválido"),
    check("password").not().isEmpty().withMessage("Olvidaste la contraseña")
], usersController.enter);

module.exports = router;