import { useState } from "react";
import { OverlayEdit } from "./OverlayEdit";
import { removeProduct } from "../../js/Products";
import BtnDelete from "../atoms/BtnDelete";
import { BtnEdit } from "../atoms/BtnEdit";
import { OverlayComfirm } from "../utils/OverlayComfirm";
import { useIsEditContext, useUserContext } from "../../providers/userContext";
/* eslint-disable react/prop-types */
export function Product({id, name,category,  description, price, setMessage, setRender}) {
  const [isVisible, setIsVisible] = useState("none");
  const [isOpenOverlay , setIsOpenOverlay] = useState(false)
  const [openOverlayDelete, setOpenOverlayDelete]= useState(false)
  const user =  useUserContext()
  const allowEdit = useIsEditContext()
  function hover() {
    allowEdit ? setIsVisible("flex") : null;
  }
  
  const mouseLeave = () => {
    setIsVisible("none");
  }; 


  const handleDelete = async() =>{
    const message = await removeProduct(id)
    setOpenOverlayDelete(false)
    setMessage(message.message)
    setRender()
  }
  

  return  (
    
    <div
      className="group-menu1"
      style={{ position: "relative" }}
      onMouseEnter={hover}
      onMouseLeave={mouseLeave}
    >
      <h1>{user && user.name}</h1>
      {openOverlayDelete && <OverlayComfirm onYes={handleDelete} /> } 
      {isOpenOverlay && <OverlayEdit key={id} id={id} name={name} category={category} description={description} price={price} setIsOpenOverlay={setIsOpenOverlay} type={'edit'} setMessage={setMessage} setRender={setRender}/> }
      {allowEdit ? (
        <span style={{ display: isVisible,
            padding : '1rem',
            gap: "10px",
            justifyContent: "flex-end",
            alignItems: "center ",
            position: " absolute",
            top: "0",
            width: "100%",
            backgroundColor: "rgba(70, 70, 70, 0.78)",
            height: "100%",
          }}
        >
          <BtnEdit onClick={()=>setIsOpenOverlay(true)}/>
          <BtnDelete onClick={()=>setOpenOverlayDelete(true)}/>
        </span>
      ) : (
        <></>
      )}

      <div className="contentL">
        <h3>{name}</h3>
        <span className="description">{description}</span>
      </div>
      <span className="price price-menu1">{price}</span>
    </div>
  
  )
}

