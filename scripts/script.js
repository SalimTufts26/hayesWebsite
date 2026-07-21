
const creature = document.querySelector("#creatureImage");
const mv = document.querySelector("#mv");
const hidden = document.querySelector("#hidden");
const audio = document.createElement("audio");
let pageTimer;
let enter;
audio.hidden = "hidden";
audio.id = "audio-player";
audio.controls = "controls";
hidden.appendChild(audio);

function creatureEvent() {
  hidden.setAttribute("style", "opacity: 100%;");
  mv.setAttribute("style", "z-index: 1;")
  audio.src = "../resources/teaserSound.mp3";
  audio.autoplay = "autoplay";
  pageTimer = setTimeout(() => {
    window.location.replace("../pages/creaturePage.html");
  }, 12000);
}

creature.addEventListener("mouseenter", () => {
  enter = setTimeout(creatureEvent, 2000);
});
creature.addEventListener("mouseleave", () => {
  clearTimeout(enter);
  clearTimeout(pageTimer);
  pageTimer = "";
  hidden.setAttribute("style", "opacity: 0%; background-image: none; transition: opacity 0s;");
  audio.src = "";
  creature.setAttribute("style", "none;");
  mv.setAttribute("style", "none;");
});

