window.addEventListener("load", function() {
    let sesionUsuario = document.getElementById("#loginAccess")
    if (typeof usuarioLogueado !== undefined) {
        sesionUsuario.innerHTML = "Hola " + usuarioLogueado.first_name;
        console.log(req.session.usuarioLogueado)
        console.log(sesionUsuario)
    }
})