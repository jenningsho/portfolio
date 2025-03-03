"use strict";

document.addEventListener("DOMContentLoaded", function() {

    const scrollToTopBtn = document.getElementById("scrollToTop");

    function toggleSCrollButton(){
        if(window.scrollY > 400){
            scrollToTopBtn.classList.add("show");
        } else{
            scrollToTopBtn.classList.remove("show");
        }
    }

    window.addEventListener("scroll", toggleSCrollButton);


    // Ajoute un effet smooth pour le retour en haut de page
    scrollToTopBtn.addEventListener("click", function(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });

        setTimeout(() => {
            if(window.scrollY > 0){
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            }
        }, 1000);
    })

    toggleSCrollButton();
})