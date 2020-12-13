window.addEventListener("load", function() {
    var totalCartProduct = document.querySelectorAll(".precioProducto");
    console.log(totalCartProduct)
    var subtotal = 0;
    for (let i = 0; i < totalCartProduct.length; i++) {
        var price = Number(totalCartProduct[i].innerHTML.replace("$", ""))
        subtotal += price;
    }
    console.log(totalCartProduct)
    document.getElementById("subtotal").innerHTML = "$" + subtotal;
})