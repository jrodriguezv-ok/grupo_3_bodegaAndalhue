const db = require('../database/models');

function recordameMiddleware(req, res, next) {

    if (req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined) {



        db.User.findOne({
                where: {
                    email: req.cookies.recordame
                }
            })
            .then(function(user) {

                req.session.usuarioLogueado = user;
            })


    }
    next();
}

module.exports = recordameMiddleware;