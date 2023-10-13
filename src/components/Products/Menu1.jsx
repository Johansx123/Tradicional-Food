import { useState } from "react";
import { BtnAdd } from "../atoms/BtnAdd";
import { OverlayEdit } from "./OverlayEdit";
import { useIsEditContext } from "../../providers/userContext";
import imgLt from '../../../public/images/lt.svg'
import imgRt from '../../../public/images/rt.svg'
import imgLb from '../../../public/images/lb.svg'
import imgRb from '../../../public/images/rb.svg'
import imgViento from '../../../public/images/viento.svg'

// eslint-disable-next-line react/prop-types
export function Menu1({children, setMessage, setRender}) {

 const [isOpenAdd, setIsOpenAdd]  = useState(false)
const allowEdit = useIsEditContext()
  
const handleBtnAdd = () => {
    setIsOpenAdd(true)
  }



  return (
    <section id="menu1" className="wrapper-menu1">
      <div id="" className="back-menu1 back-size">
        <div className="top-back-menu1">
          <img src={imgLt} alt="" className="backLt" />
          <img src={imgRt} alt="" className="backRt" />
        </div>
        <div className="bottom-back-menu1">
          <img src={imgLb} alt="" className="backLb" />
          <img src={imgRb} alt="" className="backRb" />
        </div>
      </div>
      <div className="content-menu1 back-size">
        <h2 className="title-menu1">AREPA</h2>

        <span className="subtitle-menu1">
          <h2>Tradicional</h2>
          <img src={imgViento} alt="" />
        </span>
      {children}
      {allowEdit && <BtnAdd onClick={handleBtnAdd}/>}
      { isOpenAdd && <OverlayEdit setRender={setRender} setIsOpenOverlay={setIsOpenAdd} type={'add'} setMessage={setMessage}/>} 
      </div>  
    </section>
  );
}
