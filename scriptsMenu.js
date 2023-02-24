import { eventScrollIn, eventScrollOut, eventScrollZ } from "./libreria.js";
import { sliderElement } from "./Slider.js";

// Abrir y cerrar modal
let barsMenu = document.getElementById("barsMenu");
const modal = document.createElement("div");
const body = document.getElementById("root");
const closeModal = document.createElement("img");
const content = document.createElement("section");

// barsMenu.addEventListener("click", function () {
//   closeModal.classList.add("closeModal");
//   closeModal.setAttribute("src", "images/mobile/Close.svg");

//   content.classList.add("modal");
//   content.appendChild(closeModal);

//   modal.classList.add("wrapper-modal");
//   modal.appendChild(content);

//   body.appendChild(modal);
//   body.style.overflow = "hidden";

//   closeModal.addEventListener("click", function () {
//     modal.remove();
//     body.style.overflow = "scroll";
//   });
// });

// Elementos DOM
let perro = document.getElementById("perro"),
  elementDinamic1 = document.getElementById("elementDinamic1");
// Up
eventScrollZ(
  "up",
  { transform: "translateX(17vw)", transition: "transform 0.5s" },
  { transform: "translateX(0)", transition: "transform 0.5s" }
);
// Arepa
elementDinamic1.style.scale = "0";
eventScrollOut(  "dinamic1",  "elementDinamic1",  { transition: "scale, transform, 1s", scale: "0", transform: "rotate(0)" },
  1
);
eventScrollIn(  "dinamic1",  "elementDinamic1",  {    transition: "scale, transform, 1s",    scale: "1",    transform: "rotate(360deg)",  },
  1
);
// Perro

if (window.innerWidth < 1200){
  perro.style.transform = "translateX(300px)";
  eventScrollOut("element2", "perro", { transform: "translateX(300px)" }, 2);
  eventScrollIn("element2", "perro", { transform: "translateX(0)" }, 1.5);
}
// Slider




sliderElement(document.querySelector("#sliderOthersBeverage"));
sliderElement(document.querySelector("#sliderJucie"));
  