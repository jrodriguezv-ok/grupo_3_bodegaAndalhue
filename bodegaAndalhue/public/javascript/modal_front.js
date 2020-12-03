window.addEventListener("load", function() {
    if (document.querySelector(".modal") !== undefined) {
        var modal = document.querySelector(".modal");
        const delay = 4500;

        function modalOff() {
            modal.style.display = "none";
        }
        setTimeout(modalOff, delay);
    }
})