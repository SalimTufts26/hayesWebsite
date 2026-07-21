const container = document.querySelector(".about");
const aboutText = document.querySelector("h2");
const nav = document.querySelector("nav");
nav.setAttribute("style", "translate: 0% -150%; ");

setTimeout(() => {
  nav.setAttribute("style", "translate: 0%");
}, 600)


setTimeout(() => {
    aboutText.setAttribute("style", "translate: 0%; transform: scale(1); opacity: 100%;");

}, 1200);

setTimeout(() => {
    aboutText.setAttribute("style", "none");
}, 4000);

container.addEventListener("mouseover", () => {
  aboutText.setAttribute("style", "translate: 0%; transform: scale(1); opacity: 100%;");
});
container.addEventListener("mouseleave", () => {
  aboutText.setAttribute("style", "none;");
});