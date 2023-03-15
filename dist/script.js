// const headerbg = document.querySelector(".background");
const toggleMenu = document.querySelector(".toggle__menu");
const headerBot = document.querySelector(".header__nav ul");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerBot.classList.toggle("open");
//   headerbg.classList.toggle("open");
    headerBot.style=("transition: .5s ease");
});