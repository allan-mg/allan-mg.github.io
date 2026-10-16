const languageButton = document.querySelector("#language");
const translatedElements = document.querySelectorAll("[data-es][data-en]");

let currentLanguage = "es";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  translatedElements.forEach((element) => {
    element.textContent = element.dataset[language];
  });

  languageButton.textContent = language === "es" ? "EN" : "ES";
  languageButton.setAttribute(
    "aria-label",
    language === "es" ? "Switch to English" : "Cambiar a español",
  );

  document
    .querySelector("nav")
    .setAttribute("aria-label", language === "es" ? "Principal" : "Main");

  document
    .querySelector(".brand")
    .setAttribute(
      "aria-label",
      language === "es" ? "Allan Martínez — Inicio" : "Allan Martínez — Home",
    );
}

languageButton.addEventListener("click", () => {
  setLanguage(currentLanguage === "es" ? "en" : "es");
});

document.querySelector("#year").textContent = new Date().getFullYear();
