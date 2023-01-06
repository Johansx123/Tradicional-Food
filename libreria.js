export function eventScrollIn(objeto, etiqueta,id,tolerancia=3) {


    window.addEventListener('scroll',()=>{
    
    const elementos = document.getElementsByClassName(etiqueta),
    position = document.getElementById(id),
    positionElement = position.getBoundingClientRect().top,
    pantalla = window.innerHeight/tolerancia;
    

        if (positionElement<pantalla) {
            for (const elemento of elementos) {
                for (const propiedad in objeto) {
                  elemento.style[propiedad] = objeto[propiedad];
                }
              }
              
        }
    })
    
  }
  
  export function eventScrollOut(objeto, etiqueta,id,tolerancia=3) {


    window.addEventListener('scroll',()=>{
    
    const elementos = document.getElementsByClassName(etiqueta),
    position = document.getElementById(id),
    positionElement = position.getBoundingClientRect().top,
    pantalla = window.innerHeight/tolerancia;
    

        if (positionElement<pantalla*3) {
            for (const elemento of elementos) {
                for (const propiedad in objeto) {
                  elemento.style[propiedad] = objeto[propiedad];
                }
              }
        }
    })
    
  }