    function quantity(btn) {

        var cantidad = btn.parentElement.querySelector("#quantity");
        var value = cantidad.innerText;

        if (btn.value == 'increase') {
            value++
        } else {
            if (value > 1) {
                value--
            }
        }
        cantidad.innerText = value;
        var cantidadPorForm = btn.parentElement.parentElement.querySelector("#value_quantity");
        cantidadPorForm.value = value;

        console.log(cantidadPorForm.value)

    }