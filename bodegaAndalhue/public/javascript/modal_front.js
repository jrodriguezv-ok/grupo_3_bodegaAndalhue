window.addEventListener("load", function() {

    var modal = document.querySelector(".modal");
    var session = modal.children[0];
    var register = modal.children[1];

    switch (window.location.hash) {
        case "#added":
            modal.innerHTML = "<h2>El producto se agregó<br>al carrito</h2><h4>¡Excelente!</4>"
            modal.style.display = "flex";
            break;
        case "#session":
            modal.style.display = "flex";
            session.style.display = "flex";
            break;
        case "#register":
            modal.style.display = "flex";
            register.style.display = "flex";
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