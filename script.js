const burger = document.querySelector(".burger");
const content = document.querySelector(".content");
const header = document.querySelector("header");

burger.addEventListener("click", () => {
  const isActive = burger.classList.contains("active");
  burger.classList.toggle("active");
  burger.setAttribute("aria-expanded", !isActive);

  if (!header.classList.contains("expanded")) {
    header.classList.add("expanded");
    content.classList.remove("hidden");
    setTimeout(() => {
      content.classList.add("visible");
    }, 150);
  } else {
    content.classList.remove("visible");
    setTimeout(() => {
      content.classList.add("hidden");
      header.classList.remove("expanded");
    }, 100);
  }
});

document.addEventListener("click", (e) => {
  const isActive = burger.classList.contains("active");

  if (isActive &&  !burger.contains(e.target)) {
    burger.classList.remove("active");
    burger.setAttribute("aria-expanded", !isActive);
    content.classList.remove("visible");
    setTimeout(() => {
      content.classList.add("hidden");
      header.classList.remove("expanded");
    }, 100);
  }
});

