const hamburgerContainer = document.querySelector(".header__main-nav");
const hamburger = document.querySelector(".header__main-nav--humburger");
const links = document.querySelectorAll(".header__main-nav--link__item");

hamburger.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("clicked");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
