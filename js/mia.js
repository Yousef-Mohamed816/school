let nav = document.querySelector("nav");
let faqs = document.querySelectorAll(".faq");

window.addEventListener("scroll", () => {
  nav.classList.toggle("window-scroll", window.scrollY > 0);
});

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    const icon = faq.querySelector(".faq_icon i");

    if (icon.classList === "fa-solid fa-plus") {
      icon.className = "";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";

  closeBtn.style.display = "flex";
  menuBtn.style.display = "none";
});

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "flex";
};

closeBtn.addEventListener("click", closeNav);
