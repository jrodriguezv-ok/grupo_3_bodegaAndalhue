window.addEventListener("load", function(req, res) {
    let discount = document.querySelectorAll(".descuento");
    discount.forEach(element => {
        if(element.innerText == ""){
            element.style.display = "none"
        }
    });
})