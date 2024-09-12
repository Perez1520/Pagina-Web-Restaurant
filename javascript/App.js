// MENU RESPONSIVE

var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menu-Bar");
    enlaces = document.getElementById("enlaces");

    //click abrir

    btnMenuOpen.addEventListener("click", function() {
        menuResponsive.classList.add("active");
    });
    

    btnMenuClose.addEventListener("click", function() {
        menuResponsive.classList.remove("active");
    });

    // Cerrar menun con elementos de enlaces

    enlaces.addEventListener("click", function () {
        menuResponsive.style.transitionDelay = "0.5s";
        menuResponsive.classList.remove("active");
        
    })