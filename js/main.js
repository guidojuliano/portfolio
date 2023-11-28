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

//TRANSLATE

const translationsEN = {
  menuHome: "Home",
  menuAbout: "About me",
  menuPortfolio: "Projects",
  menuContact: "Contact",
  presentationName: "I'm Guido <span>Juliano</span>",
  presentationDescription: "Web Developer",
  aboutMe: "About me",
  aboutMePartOne:
    "Hey there! I'm Guido Juliano, a self-taught Web Developer based in Resistencia, Chaco, Argentina. I have a passion for crafting dynamic web applications using React JS and TypeScript. With a strong foundation in Python, HTML, CSS, and JavaScript, I quickly dive into new technologies and frameworks. I embrace challenges and love expanding my skillset to stay ahead in the ever-evolving field of web development.",
  aboutMePartTwo:
    "I thrive in fast-paced, collaborative environments and enjoy working alongside talented teams. My ability to adapt swiftly and continuously learn empowers me to tackle diverse projects effectively. If you're seeking a motivated developer who can hit the ground running, let's connect and explore how I can contribute to your team or project!",
  projects: "Projects",
  contact: "Contact",
  languageButton: "ES",
};

const translationsES = {
  menuHome: "Inicio",
  menuAbout: "Sobre mi",
  menuPortfolio: "Proyectos",
  menuContact: "Contacto",
  presentationName: "Soy Guido <span>Juliano</span>",
  presentationDescription: "Desarrollador Web",
  aboutMe: "Sobre mi",
  aboutMePartOne:
    "¡Hola! Soy Guido Juliano, un Desarrollador Web autodidacta con sede en Resistencia, Chaco, Argentina. Tengo una pasión por crear aplicaciones web dinámicas utilizando React JS y TypeScript. Con una sólida base en Python, HTML, CSS y JavaScript, me sumerjo rápidamente en nuevas tecnologías y marcos de trabajo. Acepto desafíos y me encanta ampliar mis habilidades para mantenerme al tanto en el siempre cambiante campo del desarrollo web.",
  aboutMePartTwo:
    "Prospéro en entornos colaborativos y de ritmo rápido, y disfruto trabajar junto a equipos talentosos. Mi capacidad para adaptarme rápidamente y aprender continuamente me permite abordar proyectos diversos de manera efectiva. Si estás buscando un desarrollador motivado que pueda ponerse en marcha rápidamente, conectémonos y exploremos cómo puedo contribuir a tu equipo o proyecto.",
  projects: "Proyectos",
  contact: "Contacto",
  languageButton: "EN",
};

let currentLanguage = "en";

document.addEventListener("DOMContentLoaded", function () {
  const languageBtn = document.getElementById("btn-lan");
  const spanElement = languageBtn.querySelector("span");
  const translations =
    currentLanguage === "en" ? translationsEN : translationsES;

  languageBtn.className = "btn-lan " + currentLanguage;
  spanElement.textContent = translations.languageButton;
});
function changeLanguage() {
  currentLanguage = currentLanguage === "en" ? "es" : "en";

  const languageBtn = document.getElementById("btn-lan");

  const translations =
    currentLanguage === "en" ? translationsEN : translationsES;

  languageBtn.textContent = translations.languageButton;
  languageBtn.className = "btn-lan " + currentLanguage;

  const translationTargets = document.querySelectorAll("[data-translate]");

  translationTargets.forEach((element) => {
    const translationKey = element.dataset.translate;

    if (translationKey === "presentationName") {
      element.innerHTML = translations.presentationName;
    } else {
      element.textContent = translations[translationKey];
    }
  });
}
