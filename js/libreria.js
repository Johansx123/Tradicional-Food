export function eventScrollIn(etiqueta, id, objeto, tolerancia = 3) {
  window.addEventListener("scroll", () => {
    const elementos = document.getElementsByClassName(etiqueta),
      position = document.getElementById(id),
      positionElement = position.getBoundingClientRect().top,
      pantalla = window.innerHeight / tolerancia;

    if (positionElement < pantalla) {
      aplicarEstilos(elementos,objeto)
    }
  });
}

export function eventScrollOut(etiqueta, id, objeto, tolerancia = 3) {
  window.addEventListener("scroll", () => {
    const elementos = document.getElementsByClassName(etiqueta),
      position = document.getElementById(id),
      positionElement = position.getBoundingClientRect().top,
      pantalla = window.innerHeight / tolerancia;

    if (positionElement < pantalla * 3) {
      aplicarEstilos(elementos,objeto)
    }
  });
}

export function eventScrollZ(etiqueta, objeto, objeto2) {
  let positionAnterior = window.scrollY;
  window.addEventListener("scroll", () => {
    let positionActual = window.scrollY,
      elementos = document.getElementsByClassName(etiqueta);

    if (positionAnterior < positionActual) {
      aplicarEstilos(elementos,objeto)
    } else if (positionAnterior > positionActual) {
      aplicarEstilos(elementos,objeto2)
    }
    positionAnterior = positionActual;
  });
}

const aplicarEstilos = (elementos,objeto) => {
  for (const elemento of elementos) {
    for (const propiedad in objeto) {
      elemento.style[propiedad] = objeto[propiedad];
    }
  }
};


// Slider

const moveNext = () =>{
  let slideFirst = boxSlider.querySelectorAll(".slide")[0];
  slider.style.marginLeft = "-200%"
  slider.style.transition = "margin 0.5s"
  setTimeout(()=>{
    slider.style.transition = "none"
    slider.insertAdjacentElement("beforeend", slideFirst)
    slider.style.marginLeft = "-100%"

  }, 500);
}
const movePrev = () =>{
  let slide = boxSlider.querySelectorAll(".slide");
  let slideLast = slide[slide.length - 1];
  slider.style.marginLeft = "0%"
  slider.style.transition = "margin 0.5s"
  setTimeout(()=>{
    slider.style.transition = "none"
    slider.insertAdjacentElement("afterbegin", slideLast)
    slider.style.marginLeft= "-100%"
  }, 500);
}

export const sliderElement = (boxSlider) =>{


  const slider = boxSlider.querySelector("#slider");
  let slide = boxSlider.querySelectorAll(".slide");
  let slideLast = slide[slide.length -1];
  
  
  const prevBtn = boxSlider.querySelector ("#prevBtn");
  const nextBtn = boxSlider.querySelector ("#nextBtn");
  
  slider.insertAdjacentElement( "afterbegin", slideLast)
  
  
  nextBtn.addEventListener('click', ()=>{moveNext()})
  prevBtn.addEventListener('click', ()=>{movePrev()})
}

export const getElement = (parentSelector,elementSelector) => {
  let parent
  if(parentSelector ==! false){
    parent = document.querySelector(parentSelector)
    return parent.querySelector(elementSelector)
  }
  return document.querySelector(elementSelector);
}

