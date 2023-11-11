import "./style.scss";

// Menu Button
const menuBtn = document.querySelector(".menu-box");
const list = document.querySelector(".list");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    list.classList.add("list-open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    list.classList.remove("list-open");
    menuOpen = false;
  }
});

list.addEventListener("click", () => {
  menuBtn.classList.remove("open");
  list.classList.remove("list-open");
  menuOpen = false;
});

// Accordion
const acc = document.querySelectorAll(".accordion").forEach((btn) => {
  btn.addEventListener("click", () => {
    let panel = btn.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
