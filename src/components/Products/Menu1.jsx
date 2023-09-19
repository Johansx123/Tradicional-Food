import { useState } from "react";
import { BtnAdd } from "../atoms/BtnAdd";
import { OverlayEdit } from "./OverlayEdit";


// eslint-disable-next-line react/prop-types
export function Menu1({children}) {

 const [isOpenAdd, setIsOpenAdd]  = useState(false)

  const handleBtnAdd = () => {
    setIsOpenAdd(true)
  }

  return (
    <section id="menu1" className="wrapper-menu1">
      <div id="" className="back-menu1 back-size">
        <div className="top-back-menu1">
          <img src="../public/lt.svg" alt="" className="backLt" />
          <img src="../public/rt.svg" alt="" className="backRt" />
        </div>
        <div className="bottom-back-menu1">
          <img src="../public/lb.svg" alt="" className="backLb" />
          <img src="../public/rb.svg" alt="" className="backRb" />
        </div>
      </div>
      <div className="content-menu1 back-size">
        <h2 className="title-menu1">AREPA</h2>

        <span className="subtitle-menu1">
          <h2>Tradicional</h2>
          <img src="../public/viento.svg" alt="" />
        </span>
      
      {children}
      <BtnAdd onClick={handleBtnAdd}/>
      { isOpenAdd ? <OverlayEdit setIsOpenOverlay={setIsOpenAdd}/> :null} 
      </div>  
    </section>
  );
}
