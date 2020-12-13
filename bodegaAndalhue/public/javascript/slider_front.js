$(document).ready(function() {

    //Seleccionar los elementos
    var slider = $('#slider');
    var btnAnterior = $('#btnAnterior');
    var btnSiguiente = $('#btnSiguiente');

    //hacer que la última imágen esté al ppio

    $('#slider .slide:last').insertBefore('#slider .slide:first');

    //Con margen negativo se vuelve a mostrar el primer slide

    slider.css('margin-left', '-43%');

    // Función para que el slide se mueva hacia la derecha

    function moverDerecha() {
        if (!slider.is(':animated')) { // Si slider NO (!) esta siendo animado---> ejecutame el siguiente código
            slider.animate({
                marginLeft: '-105.6%'
            }, 700, function() { //callback---> una vez que haga la animación que ejecute la función de pasar el primer slide al final

                $('#slider .slide:first').insertAfter('#slider .slide:last');
                slider.css('margin-left', '-43%');
                resetInterval();
            });
        }
    }

    btnSiguiente.on('click', moverDerecha);

    // Función para que el slide se mueva hacia la izquierda

    function moverIzquierda() {
        if (!slider.is(':animated')) {
            $('#slider .slide:last').insertBefore('#slider .slide:first');

            slider.css('margin-left', '-105.6%');

            slider.animate({
                marginLeft: '-43%'
            }, 700, function() {
                resetInterval();
            });
        }
    }
    btnAnterior.on('click', moverIzquierda);

    // crear intervalo para que el slider se desplace automáticamente

    var intervalo = setInterval(moverDerecha, 5000);

    function resetInterval() {
        clearInterval(intervalo); //lo limpia cdo se haga click en las flechas der/izq
        intervalo = setInterval(moverDerecha, 5000); // lo vuelva a activar dps
    }

})