import { useState } from "react";
import iconEdit from "../../../public/edit.svg";
import iconDelete from "../../../public/delete.svg";
import { InputForm } from "../atoms/InputForm";
import { Button } from "../atoms/Button";
import { updateProduct } from "../../js/Products";
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
          <img src={iconDelete} style={{ cursor: "pointer" }} alt="" />
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


export function OverlayEdit ({id, name, description, price, setIsOpenEdit}){


  const handleSubmit = (e) => {
    console.log(e)
    alert('a')
    e.preventDefault()
    const fields = Object.fromEntries(new window.FormData(e.target))
    const name = fields?.name
    const description = fields?.description
    const price = fields?.price
    const data = {
      name,
      description,
      price
    }
    alert( updateProduct(id, data))
  }

  const closeOverlay = () =>{
    setIsOpenEdit(false)
  }

  return(
   <div className="overlayEdit" >
      <form style={{padding : '2em', display:'flex' , flexDirection:'column', gap:'1.5em', alignItems:'center'}} onSubmit={handleSubmit}>
        <InputForm name={'name'} label={"Nombre"} placeholder={name} type={'text'} key={1}/>
        <InputForm name={'description'} label={"Descripción"} placeholder={description} type={'text'} />
        <InputForm name={'price'} label={"Precio"} placeholder={price} type={'number'} />
        
        <div style={{display:'flex', width:'100%', gap:'1em'}}>
        <Button color="green" type={'submit'}>Actualizar</Button>
        <Button color="red" type={'button'} onClick={closeOverlay}>Cancelar</Button>
        </div>
        
      </form>
   </div>)
}
