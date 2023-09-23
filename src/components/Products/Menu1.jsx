import { useState } from "react";
import { BtnAdd } from "../atoms/BtnAdd";
import { OverlayEdit } from "./OverlayEdit";


// eslint-disable-next-line react/prop-types
export function Menu1({children, allowEdit ,setMessage, setRender}) {

 const [isOpenAdd, setIsOpenAdd]  = useState(false)

  
const handleBtnAdd = () => {
    setIsOpenAdd(true)
  }



  return (
    <section id="menu1" className="wrapper-menu1">
      <div id="" className="back-menu1 back-size">
        <div className="top-back-menu1">
          <img src="../../../public/images/lt.svg" alt="" className="backLt" />
          <img src="../../../public/images/rt.svg" alt="" className="backRt" />
        </div>
        <div className="bottom-back-menu1">
          <img src="../../../public/images/lb.svg" alt="" className="backLb" />
          <img src="../../../public/images/rb.svg" alt="" className="backRb" />
        </div>
      </div>
      <div className="content-menu1 back-size">
        <h2 className="title-menu1">AREPA</h2>

        <span className="subtitle-menu1">
          <h2>Tradicional</h2>
          <img src="../../../public/images/viento.svg" alt="" />
        </span>
      {children}
      {allowEdit && <BtnAdd onClick={handleBtnAdd}/>}
      { isOpenAdd && <OverlayEdit setRender={setRender} setIsOpenOverlay={setIsOpenAdd} type={'add'} setMessage={setMessage}/>} 
      </div>  
    </section>
  );
}
