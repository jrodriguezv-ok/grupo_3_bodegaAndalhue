window.addEventListener("load", function() {
    let usuarioLogueado = document.getElementById("#loginAccess")
    if (typeof usuarioLogueado !== undefined) {
        usuarioLogueado.innerHTML = "Hola " + usuarioLogueado.first_name;
    }
})