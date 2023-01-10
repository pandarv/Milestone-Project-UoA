
const mobileMenu = document.querySelector(".mobile-menu");
const headerNav = document.querySelector("header nav ul");
const hamFries = document.querySelector('.hamburger-fries')
// const headerNavLinks = document.querySelectorAll("header nav ul a");

/**** Header Hamburger Menu ****/
function toggleHamMenu() {
  mobileMenu.classList.toggle("active");
  headerNav.classList.toggle("active");
}

window.addEventListener('click', (e) => {
  // console.log(e.target)
  if(e.target === mobileMenu || e.target === hamFries) {
    toggleHamMenu()
  }else if(e.target !== headerNav) {
            mobileMenu.classList.remove("active");
        headerNav.classList.remove("active");
  }
})