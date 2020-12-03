window.addEventListener("load", function() {
    var price = Number(document.getElementById("priceProduct").value);
    var quantity = Number(document.getElementById("quantity").value);
    var totalCartProduct = price * quantity;

    document.getElementById("priceProduct").innerHTML = totalCartProduct;
})