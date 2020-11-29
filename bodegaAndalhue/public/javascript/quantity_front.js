window.addEventListener("load", function() {
    var value = 1;

    function quantity(btn) {
        var contador = document.getElementById("quantity").value;
        if (btn.value == 'increase') {
            value++
        } else {
            if (value > 1) {
                value--
            }
        }
        document.getElementById("quantity").textContent = value;
        document.getElementById("value_quantity").textContent = value;
    }
})