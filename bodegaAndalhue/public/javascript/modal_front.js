window.addEventListener("load", function() {
    /*  var usuario = req.session.usuarioLogueado; */
    var modal = document.querySelector(".modal");
    switch (window.location.hash) {
        case "#added":
            modal.innerHTML = "<h2>El producto se agregó<br>al carrito</h2><h4>¡Excelente!</4>"
            modal.style.display = "flex";
            break;
        case "#session":
            modal.innerHTML = "<h2>¡Hola usuario.first_name </h2><h4>Te logueaste exitosamente! Ya podés comprar<h4>"
            modal.style.display = "flex";
            break;
        case "#register":
            modal.innerHTML = /* '<h2>¡Bienvenido' + usuario.first_name'</h2><h4>Te registraste exitosamente! Ya podés empezar a comprar<h4>' */
                modal.style.display = "flex";
            break;
    };

    if (document.querySelector(".modal") !== undefined) {
        const delay = 4500;

        function modalOff() {
            modal.style.display = "none";
        }
        setTimeout(modalOff, delay);
    }
})