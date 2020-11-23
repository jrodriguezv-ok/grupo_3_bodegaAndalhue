window.addEventListener("load", function(req, res) {
    let sesionUsuario = document.getElementById("#loginAccess")
    if (req.session.usuarioLogueado !== undefined) {
        sesionUsuario.innerHTML = "Hola " + usuarioLogueado.first_name;
        console.log(req.session.usuarioLogueado)
        console.log(sesionUsuario)
    }
})