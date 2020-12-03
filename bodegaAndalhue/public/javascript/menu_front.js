window.addEventListener("load", function(req, res) {
    let menuIcon = document.querySelector(".btn-nav");
    let menuPopUp = document.querySelector(".menu-popup");
    menuIcon.addEventListener("mouseover", function() {
        menuPopUp.style.display = "flex";
    });
    menuPopUp.addEventListener("click", function() {
        menuPopUp.style.display = "none";
    });
    window.addEventListener("click", function() {
        menuPopUp.style.display = "none";
    });
})