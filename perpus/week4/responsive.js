const icon = document.getElementById("humburger");
const x = document.querySelector(".close");
const menu = document.getElementById("menu");

icon.addEventListener("click", () => {
  icon.style.display = "none";
  menu.style.right = 0;
  x.classList.add("active");
});

x.addEventListener("click", () => {
  menu.style.right = "-100%";
  x.classList.remove("active");
  icon.style.display = "flex";
});
