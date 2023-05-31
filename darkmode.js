const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .fa-sun");
const moonIcon = document.querySelector(".toggle .fa-moon");

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
});
