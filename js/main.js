const menuBtn = document.querySelector(".menu-btn");
const burger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-menu__item");

let isShow = false;
menuBtn.addEventListener("click", toggleBtn);

function toggleBtn() {
  if (!isShow) {
    burger.classList.add("open");
    nav.classList.add("open");
    navMenu.classList.add("open");
    navItem.forEach((item) => item.classList.add("open"));

    isShow = true;
  } else {
    burger.classList.remove("open");
    nav.classList.remove("open");
    navMenu.classList.remove("open");
    navItem.forEach((item) => item.classList.remove("open"));

    isShow = false;
  }
}
