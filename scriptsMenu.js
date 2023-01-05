// Abrir y cerrar modal
let barsMenu = document.getElementById("barsMenu");

barsMenu.addEventListener("click", function () {
  const modal = document.createElement("div");
  const body = document.getElementById("root");
  const closeModal = document.createElement("img");
  const content = document.createElement("section");
  let iconClose = "images/mobile/Close.svg";

  closeModal.classList.add("closeModal");
  closeModal.setAttribute("src", iconClose);

  content.classList.add("modal");
  content.appendChild(closeModal);


  modal.classList.add("wrapper-modal");
  modal.appendChild(content);


  body.appendChild(modal);
  body.style.overflow ="hidden"

  
  closeModal.addEventListener("click", function () {
     modal.remove()
     body.style.overflow ="scroll"
  });
});

// SLIDER

let slider = document.getElementById("slider")
let wrapperSlider = document.getElementById("bebidas")



wrapperSlider.addEventListener('touchmove',function(){
  slider.style.animation ="move 3s infinite"
})

let box = document.getElementById("box")
let perro = document.getElementById("perro")
perro.style.transform="translateX(300px)"
box.addEventListener('touchmove',function(){
  perro.style.transform="translateX(0px)"
}
)

let dinamic1 = document.getElementById("dinamic1");
let elementDinamic1 =  document.getElementById("elementDinamic1");


elementDinamic1.style.scale = "0"
dinamic1.addEventListener('touchmove',()=>{
  elementDinamic1.style.transition="scale, transform, 1s"
  
  elementDinamic1.style.scale='1'
  elementDinamic1.style.transform = "rotate(360deg)"  
})