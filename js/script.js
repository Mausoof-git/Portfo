// Update the year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

// Dark/Light Mode Toggle
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Check if theme is saved in local storage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀";
} else {
    body.classList.add("light-mode");
}

// Toggle Functionality
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    // Save theme preference
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "☀";
    } else {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "🌙";
    }
});

// Mobile Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
// Function to toggle dark mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
}

// Apply saved theme on page load
window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};

    document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        
        // Save theme preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark-mode");
        } else {
            localStorage.removeItem("theme");
        }
    });
});
