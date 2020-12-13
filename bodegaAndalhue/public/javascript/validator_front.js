window.addEventListener("load", function() {
    let formulario = document.querySelector("form.formLogin")
    formulario.addEventListener('submit', function(event) {
        let errores = [];
        let price = document.getElementById("price");
        if (price.value == "") {
            errores.push("El campo precio está vacío")
        };
        let añada = document.getElementById("vintage");
        if (añada.value == "") {
            errores.push("El campo añada está vacío")
        };
        let maridaje = document.getElementById("pairing");
        if (maridaje.value == "") {
            errores.push("El campo maridaje está vacío")
        };
        let notasDeCata = document.getElementById("tasting");
        if (notasDeCata.value == "") {
            errores.push("El campo notas de cata está vacío")
        };
        if (errores.length > 0) {
            event.preventDefault();
        }
        let ulErrores = document.querySelector("div.errores ul");
        for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
        }
        /* probar con el style.color poner en rojo los errores */
    })
});