let barsMenu = document.getElementById("barsMenu");

barsMenu.addEventListener("click", function () {
  const modal = document.createElement("div");
  const body = document.getElementById("root");
  const closeModal = document.createElement("img");
  const content = document.createElement("section");
  let iconClose = "./images/mobile/Close.svg";

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

