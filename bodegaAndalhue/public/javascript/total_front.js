window.addEventListener("load", function() {
    var subtotal = Number(document.getElementById("subtotal").innerText.replace("$", ""));
    var shipping = Number(document.getElementById("shipping").innerText.replace("$", ""));
    var coupon = Number(document.getElementById("coupon").innerText.replace("$", ""));

    var totalCartProduct = subtotal + shipping - coupon;

    document.getElementById("total").innerText = "$" + totalCartProduct;
    var totalCart = document.getElementById("totalCart")

    totalCart.value = totalCartProduct;


})