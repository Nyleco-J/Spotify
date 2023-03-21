// const toggleMenu1 = document.querySelector(".toggle__menu1");
// const plat = document.querySelector(".docu ul");
// toggleMenu1.addEventListener("click", () => {
//   toggleMenu1.classList.toggle("open");
//   plat.classList.toggle("open");
// });

const toggleMenu1 = document.querySelector(".toggle__menu1");
const headerNav1 = document.querySelector(".navi ul");
toggleMenu1.addEventListener("click", () => {
  toggleMenu1.classList.toggle("open");
  headerNav1.classList.toggle("open");
  headerNav1.style=("transition: 300ms");
});