function adminMiddleware(req, res, next) {
    if (req.session.usuarioLogueado != undefined && req.session.usuarioLogueado.rol == 'administrador')
   next();
    else {
        res.redirect('/');
    }
}
module.exports = adminMiddleware;