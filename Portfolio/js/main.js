addEventListener("DOMContentLoaded", () => {
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
