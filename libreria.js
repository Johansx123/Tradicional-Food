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
