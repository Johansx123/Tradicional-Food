import { useEffect, useRef, useState } from 'react';

export function useSlider() {
  const [arrowIcons, setArrowIcons] = useState();
  const [firstElement, serFirstElement] = useState();
  const carousel = useRef();
  const arrowIconsLeft = useRef(null);
  const arrowIconsRight = useRef(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const serviceElements = [];
  const margin = 33;
  let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

  const setElements = (ref) => {
    serviceElements.push(ref);
    return serviceElements;
  };

  useEffect(() => {
    if (arrowIconsLeft && arrowIconsRight)
      setArrowIcons([arrowIconsLeft, arrowIconsRight]);
  }, []);
  useEffect(() => {
    serFirstElement(serviceElements[0]);
  }, [serviceElements]);

  const showHideIcons = () => {
    let scrollWidth = carousel.current.scrollWidth - carousel.current.clientWidth;
    arrowIcons[0].current.style.display =
      carousel.current.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].current.style.display =
      carousel.current.scrollLeft == scrollWidth ? "none" : "block";
  };

  const autoSlide = () => {
    if (carousel.current.scrollLeft ==
      carousel.current.scrollWidth - carousel.current.clientWidth)
      return;
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstElement.clientWidth + margin;
    let valDifference = firstImgWidth - positionDiff;

    if (carousel.current.scrollLeft > prevScrollLeft) {
      return (carousel.current.scrollLeft +=
        positionDiff > firstImgWidth / 8 ? valDifference : -positionDiff);
    }

    carousel.current.scrollLeft -=
      positionDiff > firstImgWidth / 8 ? valDifference : -positionDiff;
  };

  const dragStart = (e) => {
    e.preventDefault();
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.current.scrollLeft;
  };
  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    console.log();
    isDragging = true;
    carousel.current.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.current.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  };
  const dragStop = () => {
    isDragStart = false;
    carousel.current.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
  };

  const handleClick = (event) => {
    let firstImgWidth = firstElement.clientWidth + margin;
    carousel.current.scrollLeft += event.target.id === "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);

  };
  return {
    arrowIconsLeft,
    arrowIconsRight,
    carousel,
    handleClick,
    setElements,
    dragStart,
    dragging,
    dragStop,
  };
}
