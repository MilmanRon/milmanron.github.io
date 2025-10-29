const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  const isActive = burger.classList.contains("active");
  burger.classList.toggle("active");
  menu.classList.toggle("open");
  menu.classList.toggle("spacing-16");
  burger.setAttribute("aria-expanded", !isActive);
});
