window.addEventListener("load", function() {

    const lupa = document.querySelector('#lupa');
    const input = document.querySelector('.buscador-filtro input');

    console.log(lupa)
    console.log(input)
    
    
    lupa.addEventListener("click", function() {
        input.style.display = "block";
        /* input.style.borderColor= "#C4AF64"; */
        input.focus();
      });
      input.addEventListener("mouseover", function() {
        input.style.display = "none";
    });

});