const db = require('../database/models');

function recordameMiddleware(req, res, next) {
    /*    console.log(typeof req.cookies.recordame)
       console.log(typeof req.session.usuarioLogueado); */

    if (typeof req.cookies.recordame != 'undefined' && typeof req.session.usuarioLogueado == 'undefined') {

        db.User.findOne({
                where: {
                    email: req.cookies.recordame
                }
            })
            .then(function(user) {
                req.session.usuarioLogueado = user;
                /* console.log(req.session.usuarioLogueado) */
            })
    }
    next();
}

module.exports = recordameMiddleware;