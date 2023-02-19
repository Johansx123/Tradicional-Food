const slider = document.querySelector('.slider');
const slides = slider.querySelector('slide');
const prevButton = slider.querySelector('#prevButton');
const nextButton = slider.querySelector('#nextButton');

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
