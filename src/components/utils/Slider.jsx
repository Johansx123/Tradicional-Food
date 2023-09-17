/* eslint-disable no-unused-vars */
import { forwardRef} from 'react';
import { useSlider } from '../../hooks/useSlider';

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function Services({children}, refServices) {
  const {
    arrowIconsLeft,
    arrowIconsRight,
    carousel,
    handleClick, 
    setElements,
    dragStart,
    dragging,
    dragStop
  } = useSlider();  


  return (
    <>
      <section ref={refServices} className="services-wrapper">
        <i
          id={"left"}
          ref={arrowIconsLeft}
          className="fa-solid fa-angle-left left"

          onClick={handleClick}
        ></i>
        <div></div>
        <div
          className="services-carousel"
          ref={carousel}
          onMouseDown={dragStart}
          onTouchStart={dragStart}
          onMouseMove={dragging}
          onTouchMove={dragging}
          onMouseUp={dragStop}
          onMouseLeave={dragStop}
          onTouchEnd={dragStop}
        >
          {children}
          
        </div>

        <i
          id={"right"}
          ref={arrowIconsRight}
          className="fa-solid fa-angle-right right "
          onClick={handleClick}
        ></i>
      </section>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default forwardRef (Services)
