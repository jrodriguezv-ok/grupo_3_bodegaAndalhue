const db = require('../database/models');

function recordameMiddleware(req, res, next) {

    if (req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined) {
        /*  let userFind; */


        db.User.findOne({
                where: {
                    email: req.cookies.recordame
                }
            })
            .then(function(user) {
                if (req.cookies.recordame == user.email) {
                    req.session.usuarioLogueado = user;
                }
            })
            /* req.session.usuarioLogueado = userFind; */
    }
    next();
}

module.exports = recordameMiddleware;