
"use strict";

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Close the menu when a navigation link is selected
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });

    // Close the menu if the screen returns to desktop width
    window.addEventListener("resize", () => {
        if (window.innerWidth > 650) {
            navLinks.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        }
    });
}

// Automatically update the footer year
const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* Temporary hero design comparison */

const heroVisual = document.querySelector("#hero-visual");
const designButtons = document.querySelectorAll("[data-design]");

if (heroVisual && designButtons.length > 0) {
    designButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const showPhoto = button.dataset.design === "photo";

            heroVisual.classList.toggle("photo-mode", showPhoto);

            designButtons.forEach((item) => {
                item.setAttribute(
                    "aria-pressed",
                    String(item === button)
                );
            });
        });
    });
}
