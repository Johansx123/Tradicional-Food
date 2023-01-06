import { eventScrollIn, eventScrollOut } from "./libreria.js";

// Abrir y cerrar modal
let barsMenu = document.getElementById("barsMenu");
const modal = document.createElement("div");
const body = document.getElementById("root");
const closeModal = document.createElement("img");
const content = document.createElement("section");

barsMenu.addEventListener("click", function () {
  closeModal.classList.add("closeModal");
  closeModal.setAttribute("src", "images/mobile/Close.svg");

  content.classList.add("modal");
  content.appendChild(closeModal);

  modal.classList.add("wrapper-modal");
  modal.appendChild(content);

  body.appendChild(modal);
  body.style.overflow = "hidden";

  closeModal.addEventListener("click", function () {
    modal.remove();
    body.style.overflow = "scroll";
  });
});

// Elementos DOM

let slider = document.getElementById("slider"),
  wrapperSlider = document.getElementById("bebidas"),
  box = document.getElementById("box"),
  // perro = document.getElementById("perro"),
  // dinamic1 = document.getElementById("dinamic1"),
  elementDinamic1 = document.getElementById("elementDinamic1"),
  up = document.getElementById("up");
// Slider

window.addEventListener("scroll", function () {
  let position = wrapperSlider.getBoundingClientRect().top;
  let pantalla = window.innerHeight / 2;
  if (position < pantalla) {
    slider.style.animation = "move 3s infinite";
  }
});

// Perro
perro.style.transform = "translateX(300px)";

// Arepa

elementDinamic1.style.scale = "0";


eventScrollOut({transition: "scale, transform, 1s",scale: "0",transform: "rotate(0),",},"dinamic1","elementDinamic1",1  );
eventScrollIn({transition: "scale, transform, 1s",scale: "1",transform: "rotate(360deg),",},"dinamic1","elementDinamic1",1  );


// Up
let positionAnterior = window.scrollY;
window.addEventListener("scroll", () => {
  let positionActual = window.scrollY;
  if (positionAnterior < positionActual) {
    up.style.transform = "translateX(17vw)";
    up.style.transition = "transform 0.5s";
  } else if (positionAnterior > positionActual) {
    up.style.transform = "translateX(0)";
    up.style.transition = "transform 0.5s";
  }
  positionAnterior = positionActual;
});

eventScrollOut({ transform: "translateX(300px)" }, "element2", "perro",2);
eventScrollIn({ transform: "translateX(0)" }, "element2", "perro", 1);
