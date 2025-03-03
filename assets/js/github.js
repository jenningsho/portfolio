"use strict";

document.addEventListener("DOMContentLoaded", function() {

    const username = "jenningsho";
    const projectContainer = document.getElementById("project-container");

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response =>  response.json())
        .then(repos => {
            projectContainer.innerHTML = "";

            repos.forEach(repo => {
                const projectCard = document.createElement("div");
                projectCard.classList.add("project-card");

                projectCard.innerHTML = `
                    <h3> ${repo.name} </h3>
                    <p> ${repo.description || "Pas de description."}</p>
                    <a href="${repo.html_url}" target="_blank">Voir sur Github</a>
                `;

                projectContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error("Erreur lors de la récupération des projets :", error));
});