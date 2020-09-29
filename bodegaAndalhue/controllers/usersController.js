const usersController = {
    loginRegister: (req, res, next) => {
        res.render('users/loginRegister');
    },
    register: (req, res, next) => {
        res.render('users/register');
    },
    login: (req, res, next) => {
        res.render('users/login');
    }
}

module.exports = usersController;