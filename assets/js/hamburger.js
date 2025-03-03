"use strict";

document.addEventListener("DOMContentLoaded", function (){
    const menuToggle = document.querySelector(".navbar__toggle"); 
    const navMenu = document.querySelector(".navbar__menu"); 
    const navLinks = document.querySelectorAll(".navbar__menu a");
    const menuOverlay = document.querySelector(".menu-overlay");

    // Fonction pour ouvrir et fermer le menu
    function toggleMenu(){
        navMenu.classList.toggle('nav-active');
        menuToggle.classList.toggle('toggle-active');
        menuOverlay.classList.toggle("overlay-active"); // Active/désactive l'overlay

    }
    menuToggle.addEventListener("click", toggleMenu);

    // Ferme le menu lorsqu'on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener("click", () =>{
            navMenu.classList.remove("nav-active");
            menuToggle.classList.remove("toggle-active");
            menuOverlay.classList.remove("overlay-active");

        });
    });

     // Ferme le menu lorsqu'on clique en dehors
     menuOverlay.addEventListener("click", () => {
        navMenu.classList.remove("nav-active");
        menuToggle.classList.remove("toggle-active");
        menuOverlay.classList.remove("overlay-active");
    });
});