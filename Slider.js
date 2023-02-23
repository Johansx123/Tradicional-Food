
const sliderElement = (boxSlider) =>{


  const slider = boxSlider.querySelector("#slider");
  let slide = boxSlider.querySelectorAll(".slide");
  let slideLast = slide[slide.length -1];
  
  
  const prevBtn = boxSlider.querySelector ("#prevBtn");
  const nextBtn = boxSlider.querySelector ("#nextBtn");
  
  slider.insertAdjacentElement( "afterbegin", slideLast)
  
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
  
  nextBtn.addEventListener('click', ()=>{moveNext()})
  prevBtn.addEventListener('click', ()=>{movePrev()})
}


sliderElement(document.querySelector("#sliderJucie"));
sliderElement(document.querySelector("#sliderOthersBeverage"))