// Script.js

// Functionality for searching categories
const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-btn");
const categories = document.querySelectorAll(".category");
const notFoundMessage = document.createElement("p");
notFoundMessage.textContent = "No results found.";
notFoundMessage.classList.add("not-found");

function searchCategories() {
    const query = searchBar.value.toLowerCase().trim();
    let found = false;

    categories.forEach((category) => {
        const title = category.querySelector("h3").textContent.toLowerCase();
        if (title.includes(query)) {
            category.style.display = "block";
            found = true;
        } else {
            category.style.display = "none";
        }
    });

    if (!found) {
        document.querySelector(".gallery").appendChild(notFoundMessage);
    } else if (notFoundMessage.parentNode) {
        notFoundMessage.parentNode.removeChild(notFoundMessage);
    }
}

// Event listeners for search
searchButton.addEventListener("click", searchCategories);
searchBar.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchCategories();
    }
});

// Dynamic highlighting for active navigation
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(nav => nav.classList.remove("active"));
        link.classList.add("active");
    });
});
