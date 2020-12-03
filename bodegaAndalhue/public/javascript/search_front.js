window.addEventListener("load", function() {

    const formulario = document.querySelector('#formulario');
    const boton = document.querySelector('#boton');

    const filtrar = function() {
        console.log(formulario.value);
        /* const texto = formulario.value.toLowerCase(); */
    }

    boton.addEventListener('click', filtrar)




});