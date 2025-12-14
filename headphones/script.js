document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open"); // ⬅ adds/removes .open
    navMenu.classList.toggle("open"); // if you use .nav-menu.open for show/hide
  });

  // Close menu when clicking a link (mobile)
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      hamburger.classList.remove("open");
    });
  });
});
