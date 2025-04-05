// Dynamically update the year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle logic
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Apply saved theme on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀";
} else {
    body.classList.add("light-mode");
    toggleButton.textContent = "🌙";
}

// Toggle theme on button click
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    const isDark = body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleButton.textContent = isDark ? "☀" : "🌙";
});
// Hamburger menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
