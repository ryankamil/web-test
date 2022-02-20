//hamburger script
let menuOpen = document.querySelectorAll(".menu-bar");
let changeIcon = () => {
  for (let i = 0; i < menuOpen.length; i++) {
    menuOpen[i].classList.toggle("active");
  }
};

// nav link
const menuChange = document.querySelector(".menu-bar");
const slideNav = document.querySelector("nav ul");

menuChange.addEventListener("click", () => {
  slideNav.classList.toggle("slide");
});
