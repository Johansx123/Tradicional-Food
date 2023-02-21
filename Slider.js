const scr = (i) =>{

  const contSlider = document.querySelector('.wrapper-jucie')
  const slider = document.getElementsByClassName('slider');
  const slides = slider[i].getElementsByClassName('slide');
  const buttonsPrev = document.getElementById('prevButton') 
  const buttonsNext = document.getElementById('nextButton') 
  console.log(buttonsNext)

  const prevButton = buttonsPrev[i].querySelector('#prevButton');
  const nextButton = buttonsNext[i].querySelector('#nextButton');
  
  let currentSlide = 0;
  const slideInterval = setInterval(nextSlide, 3000);
  function nextSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
  }
  
  function prevSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.opacity = 1;
  }
  
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
}

scr(1)