window.addEventListener("load", function(req, res) {
    let menuPopUp = document.getElementById("#menu-popup");
    menuPopUp.addEventListener("mousehover", function() {
        menuPopUp.style.color = "red";
    })
})