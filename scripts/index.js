const container = document.querySelector(".about");
const aboutText = document.querySelector("h2");


setTimeout(() => {
    aboutText.setAttribute("style", "translate: 0%; transform: scale(1); opacity: 100%;");
}, 500);

setTimeout(() => {
    aboutText.setAttribute("style", "none");
}, 3000);

container.addEventListener("mouseover", () => {
  aboutText.setAttribute("style", "translate: 0%; transform: scale(1); opacity: 100%;");
});
container.addEventListener("mouseleave", () => {
  aboutText.setAttribute("style", "none;");
});