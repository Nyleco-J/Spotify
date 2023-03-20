const toggleMenu1 = document.querySelector(".toggle__menu1");
const plat = document.querySelector(".docu ul");
toggleMenu1.addEventListener("click", () => {
  toggleMenu1.classList.toggle("open");
  plat.classList.toggle("open");
});