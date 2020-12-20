window.addEventListener("load", function(req, res) {

    let detalle = document.getElementById("detalle");
    let infoAdic = document.getElementById("infoAdicional"); 
    let contDetalle = document.getElementsByClassName("detalle");
    let contAdicional = document.getElementsByClassName("info-adic");
    console.log(contDetalle[0]);

    detalle.addEventListener('click', function(){
            detalle.classList.toggle("visible");
            infoAdic.classList.toggle("visible");
            contDetalle[0].classList.remove("non-display");
            contAdicional[0].classList.add("non-display")
    });
    infoAdic.addEventListener('click', function(){
            detalle.classList.toggle("visible");
            infoAdic.classList.toggle("visible"); 
            contAdicional[0].classList.remove("non-display");
            contDetalle[0].classList.add("non-display")
    }
    );
 })