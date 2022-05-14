const mobileMenu = document.querySelector(".mobile-menu");
const headerNav = document.querySelector("header nav ul");
const headerNavLinks = document.querySelectorAll("header nav ul a");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  headerNav.classList.toggle("active");
});

headerNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // if any link contains .active class
    if (headerNav.classList.contains("active")) {
      mobileMenu.classList.toggle("active");
      headerNav.classList.toggle("active");
    }
  });
});
