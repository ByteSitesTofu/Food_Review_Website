// DarkMode
const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
});
