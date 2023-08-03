/* eslint-disable no-unused-vars */
import { forwardRef} from 'react';
import { useSlider } from '../../hooks/useSlider';
import JugoDeFresa from "../../../public/Jugo de Fresa.png"

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function SliderBeverage({children}, refslider) {
  const { arrowIconsLeft,arrowIconsRight,carousel,handleClick, setElements,dragStart,dragging,dragStop} = useSlider();  


  return (
    <>
      <section ref={refslider} className="slider-wrapper">

        <i id={"left"} ref={arrowIconsLeft} className="fa-solid fa-angle-left left" onClick={handleClick} ></i>
        <div className="slider-carousel" ref={carousel} onMouseDown={dragStart} onTouchStart={dragStart} onMouseMove={dragging} onTouchMove={dragging} onMouseUp={dragStop} onMouseLeave={dragStop} onTouchEnd={dragStop}><img ref={setElements} src={JugoDeFresa} alt="" />
          <img ref={setElements} src={JugoDeFresa} alt="" />
          <img ref={setElements} src={JugoDeFresa} alt="" />
          <img ref={setElements} src={JugoDeFresa} alt="" />
          <img ref={setElements} src={JugoDeFresa} alt="" />
        </div>

        <i id={"right"} ref={arrowIconsRight} className="fa-solid fa-angle-right right " onClick={handleClick}></i>

      </section>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default forwardRef (SliderBeverage)
