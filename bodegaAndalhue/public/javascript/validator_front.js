window.addEventListener("load", function() {
    let formulario = document.querySelector("form.formLogin")
    formulario.addEventListener('submit', function(event) {
        let errores = [];
        let state = document.getElementById("state");
        if (state.value == "") {
            errores.push("El campo estado está vacío")
        };
        let category = document.getElementById("category");
        if (category.value == "") {
            errores.push("El campo categoría está vacío")
        };
        let brand = document.getElementById("brand");
        if (brand.value == "") {
            errores.push("El campo linea está vacío")
        };
        let varietal = document.getElementById("varietal");
        if (varietal.value == "") {
            errores.push("El campo varietal está vacío")
        };
        let quality = document.getElementById("quality");
        if (quality.value == "") {
            errores.push("El campo calidad está vacío")
        };
        let price = document.getElementById("price");
        if (price.value == "") {
            errores.push("El campo precio está vacío")
        };
        let vintage = document.getElementById("vintage");
        if (vintage.value == "") {
            errores.push("El campo añada está vacío")
        };
        let display = document.getElementById("display");
        if (display.value == "") {
            errores.push("El campo presentación está vacío")
        };
        let discount = document.getElementById("discount");
        if (discount.value == "") {
            errores.push("El campo descuento está vacío")
        };
        let maridaje = document.getElementById("pairing");
        if (maridaje.value == "") {
            errores.push("El campo maridaje está vacío")
        };
        let notasDeCata = document.getElementById("tasting");
        if (notasDeCata.value == "") {
            errores.push("El campo notas de cata está vacío")
        };
        let temperature = document.getElementById("temperature");
        if (temperature.value == "") {
            errores.push("El campo temperatura está vacío")
        };
        let image = document.getElementById("image");
        if (image.value == "") {
            errores.push("El campo imagen está vacío")
        };
        let datasheet = document.getElementById("datasheet");
        if (datasheet.value == "") {
            errores.push("El campo ficha técnica está vacío")
        };
        if (errores.length > 0) {
            event.preventDefault();
        }
        let ulErrores = document.querySelector("div.errores ul");
        for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
        }
    })
});