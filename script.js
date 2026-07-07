// =======================================
// OAK & STONE ESTATE AGENTS
// script.js
// Part 1
// =======================================

// -----------------------------
// Smooth scrolling for navigation
// -----------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

});

// -----------------------------
// Navbar background on scroll
// -----------------------------

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.padding = "14px 30px";
        navbar.style.transition = "0.3s";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        navbar.style.padding = "18px 30px";
        navbar.style.boxShadow = "none";

    }

});

// -----------------------------
// Reveal sections on scroll
// -----------------------------

const revealElements = document.querySelectorAll(
    ".about-card, .property-card, .featured-image, .location-section, .contact-container"
);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all .8s ease";

    revealObserver.observe(element);

});

// -----------------------------
// Button hover animation
// -----------------------------

document.querySelectorAll(".primary-btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});

// =======================================
// End of Part 1
// =======================================
// =======================================
// OAK & STONE ESTATE AGENTS
// script.js
// Part 2
// =======================================

// -----------------------------
// Formspree AJAX Form Submission
// -----------------------------

const form = document.getElementById("contact-form");
const successMessage = document.getElementById("successMessage");

if (form) {

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        const formData = new FormData(form);

        try {

            const response = await fetch(form.action, {

                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }

            });

            if (response.ok) {

                form.reset();

                form.style.display = "none";

                successMessage.classList.add("show");

                successMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            } else {

                alert("Something went wrong. Please try again.");

            }

        } catch (error) {

            alert("Unable to send your enquiry. Please check your internet connection.");

        }

    });

}

// -----------------------------
// Fade in hero content
// -----------------------------

window.addEventListener("load", () => {

    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {

        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(30px)";
        heroContent.style.transition = "all 1s ease";

        setTimeout(() => {

            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";

        }, 200);

    }

});

// -----------------------------
// Simple image hover effect
// -----------------------------

document.querySelectorAll(".property-card img, .featured-photo img, .location-image img").forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.05)";
        image.style.transition = "0.5s ease";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

// -----------------------------
// Current year for footer
// -----------------------------

const footerText = document.querySelector(".footer-bottom p");

if (footerText) {

    footerText.innerHTML =
        `© ${new Date().getFullYear()} Oak & Stone Estate Agents. All Rights Reserved.`;

}

// =======================================
// End of script.js
// =======================================
