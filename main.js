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
