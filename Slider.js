import { getElement } from "./libreria.js";

const moveNext = (boxSlider, slider) => {
  let slideFirst = boxSlider.querySelectorAll(".slide")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "margin 0.5s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", slideFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
};
const movePrev = (boxSlider, slider) => {
  let slide = boxSlider.querySelectorAll(".slide");
  let slideLast = slide[(slide.length - 1, slide.length - 2)];
  slider.style.marginLeft = "0%";
  slider.style.transition = "margin 0.5s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", slideLast);
    slider.style.marginLeft = "0";
  }, 500);
};




const getSliderElements = (parent) =>{
  const boxSlider = getElement(false,parent),
        slider = getElement(boxSlider,`${parent}-slider`),
        slide = slider.querySelectorAll('.slide'),

        prevBtn = getElement(boxSlider,`${parent}-prevBtn`),
        nextBtn = getElement(boxSlider,`${parent}-nextBtn`)

  return { boxSlider:boxSlider,slider:slider, slide:slide, prevBtn:prevBtn, nextBtn:nextBtn}
}

export const starSlider = (parent) =>{
  const {boxSlider,slider,
        slide,prevBtn,nextBtn} = 
        getSliderElements(parent)

  let slideLast = slide[(slide.length - 1, slide.length - 2)];
        slider.insertAdjacentElement("afterbegin", slideLast);
  
  nextBtn.addEventListener("click", () => {moveNext(boxSlider,slider);});
  prevBtn.addEventListener("click", () => {movePrev(boxSlider, slider);});
}