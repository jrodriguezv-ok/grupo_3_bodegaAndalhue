var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')
const { check, validationResult, body } = require('express-validator');
const guestMiddleware = require('../middlewares/guestMiddleware');


// LOGIN-REGISTER
router.get('/loginRegister', guestMiddleware, usersController.loginRegister);

// REGISTER
router.get('/register', guestMiddleware, usersController.register);
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

router.get('/registerAdmin', guestMiddleware, usersController.registerAdmin);
router.post('/registerAdmin', [
    check("first_name").isLength({ min: 2, max: 50 }).withMessage("Nombre inválido"),
    check("last_name").isLength({ min: 2, max: 50 }).withMessage("Apellido inválido"),
    check("birthdate").isDate().withMessage("Fecha inválida"),
    check("address").not().isEmpty().withMessage("Olvidaste tu dirección"),
    check("town").not().isEmpty().withMessage("Olvidaste tu localidad"),
    check("country").not().isEmpty().withMessage("Olvidaste tu país"),
    check("email").isEmail().withMessage("Email inválido"),
    check("password").not().isEmpty().withMessage("Olvidaste la contraseña")
], usersController.storeAdmin);

// LOGIN
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', [
    check("email").isEmail().withMessage("Email inválido"),
    check("password").not().isEmpty().withMessage("Olvidaste la contraseña")
], usersController.enter);

//PROFILE
router.get('/profile/:id', usersController.profile);
router.get('/profile/edit/:id', usersController.editProfile);
router.post('/profile/edit/:id', [
    check("address").not().isEmpty().withMessage("Olvidaste tu dirección"),
    check("town").not().isEmpty().withMessage("Olvidaste tu localidad"),
    check("country").not().isEmpty().withMessage("Olvidaste tu país"),
    check("email").isEmail().withMessage("Email inválido")
], usersController.updateProfile);

//LOGOUT
router.get('/logout', usersController.logOut);


module.exports = router;