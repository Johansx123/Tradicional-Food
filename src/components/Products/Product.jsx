import { useState } from "react";
import iconEdit from "../../../public/edit.svg";
import iconDelete from "../../../public/delete.svg";
import { OverlayEdit } from "./OverlayEdit";
import { removeProduct } from "../../js/Products";
/* eslint-disable react/prop-types */
export function Product({id, name, description, price, allowEdit }) {
  const [isVisible, setIsVisible] = useState("none");
  const [isOpenEdit , setIsOpenEdit] = useState(false)

  function hover() {
    allowEdit ? setIsVisible("flex") : null;
  }
  
  const mouseLeave = () => {
    setIsVisible("none");
  };

  const handleDelete = async() =>{
    const message = await removeProduct(id)
    console.log(message)
    
  }
  

  return  (
    
    <div
      className="group-menu1"
      style={{ position: "relative" }}
      onMouseEnter={hover}
      onMouseLeave={mouseLeave}
    >
      {isOpenEdit ? <OverlayEdit key={id} id={id} name={name} description={description} price={price} setIsOpenEdit={setIsOpenEdit}/> : null}
      {allowEdit ? (
        <span
          style={{
            display: isVisible,
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
          <img
            src={iconEdit}
            style={{ cursor: "pointer" }}
            onClick={() => {setIsOpenEdit(true)}}
            alt=""
          />
          <img src={iconDelete} style={{ cursor: "pointer" }} alt="Eliminar " onClick={handleDelete} />
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



