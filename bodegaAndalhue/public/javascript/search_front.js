window.addEventListener("load", function() {

    const lupa = document.querySelector('#lupa');
    const input = document.querySelector('.buscador-filtro input');

    console.log(lupa)
    console.log(input)


    lupa.addEventListener("click", function() {
        input.style.display = "block";
        input.focus();
    });
    input.addEventListener("mouseout", function() {
        input.style.display = "none";
    });

});