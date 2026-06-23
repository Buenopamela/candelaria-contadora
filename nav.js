// Menú hamburguesa mobile
const navToggle = document.getElementById("navToggle");
const navMobileMenu = document.getElementById("navMobileMenu");

if (navToggle && navMobileMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMobileMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  navMobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMobileMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
