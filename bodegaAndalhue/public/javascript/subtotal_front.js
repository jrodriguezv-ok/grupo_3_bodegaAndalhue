window.addEventListener("load", function() {
    var totalCartProduct = Number(document.getElementById("priceProduct"));

    document.getElementById("subtotal").innerHTML = totalCartProduct;
})