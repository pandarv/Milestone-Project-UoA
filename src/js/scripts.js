const mobileMenu = document.querySelector(".mobile-menu");
const headerNav = document.querySelector("header nav ul");
const headerNavLinks = document.querySelectorAll("header nav ul a");

/**** Header Hamburger Menu ****/
function toggleHamMenu() {
  mobileMenu.classList.toggle("active");
  headerNav.classList.toggle("active");
}

mobileMenu.addEventListener("click", () => {
  toggleHamMenu();
});

headerNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // if any link contains .active class
    if (headerNav.classList.contains("active")) {
      toggleHamMenu();
    }
  });
});
