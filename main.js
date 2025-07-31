document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const toggleButtons = document.querySelectorAll(".sidebar-toggle");
  const themeToggle = document.querySelector(".theme-toggle");
  const themeText = document.querySelector(".theme-text");
  const themeIcon = themeToggle.querySelector("i");
  const contentFrame = document.getElementById("contentFrame");

  // Toggle Sidebar
  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
  });

  // Toggle Dark Mode
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeText.textContent = isDark ? "Light Mode" : "Dark Mode";
    themeIcon.className = isDark ? "bx bx-sun" : "bx bx-moon";
  });

  // Menu click load iframe content
  const menuLinks = document.querySelectorAll(".menu-link");
  menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Load page into iframe
      const page = link.getAttribute("data-page");
      contentFrame.src = page;

      // Update active class
      document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));
      link.closest(".menu-item").classList.add("active");
    });
  });
});
