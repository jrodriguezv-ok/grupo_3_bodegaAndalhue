window.addEventListener("load", function() {
    let sesionUsuario = document.getElementById("#loginAccess")
    if (typeof usuario !== undefined) {
        sesionUsuario.innerHTML = "Hola " + usuario.first_name;
        console.log(req.session.usuario)
        console.log(sesionUsuario)
    }
})