// Toggle sidebar open/close
const sidebarToggles = document.querySelectorAll(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });
});

// Load page inside iframe
function loadPage(page) {
    document.getElementById("contentFrame").src = page;

    // Highlight the active menu
    document.querySelectorAll(".menu-item").forEach((item) =>
        item.classList.remove("active")
    );
    const link = [...document.querySelectorAll(".menu-link")].find((l) =>
        l.getAttribute("onclick")?.includes(page)
    );
    if (link) link.parentElement.classList.add("active");
}

// Theme toggle
document.querySelector(".theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Trigger animations on page load
document.addEventListener("DOMContentLoaded", () => {
    const menuLabels = document.querySelectorAll(".menu-label");
    const searchInput = document.querySelector(".search-form input");
    const themeText = document.querySelector(".theme-text");

    menuLabels.forEach((label, index) => {
        label.style.animationDelay = `${index * 0.1}s`;
    });
    if (searchInput) searchInput.style.animationDelay = "0.3s";
    if (themeText) themeText.style.animationDelay = "0.4s";
});
