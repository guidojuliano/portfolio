addEventListener("DOMContentLoaded", () => {
  const btn_menu = document.querySelector(".btn-menu");
  if (btn_menu) {
    btn_menu.addEventListener("click", () => {
      const menu_items = document.querySelector(".menu_items");
      menu_items.classList.toggle("show");
    });
  }

  const sections = document.querySelectorAll(".section");
  const menuItems = document.querySelectorAll(".menu_item");

  const functionObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const itemNow = Array.from(menuItems).find(
          (item) => item.dataset.url === entry.target.id
        );
        itemNow.classList.add("active");
        for (const item of menuItems) {
          if (item != itemNow) {
            item.classList.remove("active");
          }
        }
      }
    });
  };

  const observer = new IntersectionObserver(functionObserver, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  sections.forEach((sections) => observer.observe(sections));
});

addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("down", window.scrollY > 0);
});

const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
