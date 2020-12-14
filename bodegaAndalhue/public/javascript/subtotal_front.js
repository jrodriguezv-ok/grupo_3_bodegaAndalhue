window.addEventListener("load", function() {
    var priceCartProduct = document.querySelectorAll(".precioProducto");

    var subtotal = 0;
    for (let i = 0; i < priceCartProduct.length; i++) {
        var price = Number(priceCartProduct[i].innerHTML.replace("$", ""))
        subtotal += price;
    }
    document.getElementById("subtotal").innerHTML = "$" + subtotal;
})