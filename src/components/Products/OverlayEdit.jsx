import { InputForm } from "../atoms/InputForm";
import { Button } from "../atoms/Button";
import { addArrayProducts } from "../../js/Products";
import {  useEffect, useState } from "react";
import { useSendProducts } from "../../hooks/useSendProducts";
import { FieldSelect } from "./FieldSelect";
import { useUserContext } from "../../providers/userContext";
import useCategories from "../../hooks/useCategories";



export function OverlayEdit({setMessage, id, name, category , description, price, setIsOpenOverlay, type, setRender, onUpdate}) {

  const types = {
    edit : 'edit',
    add : 'add'
  }
  const [categories , setCategories] = useState()
  const hookCategories = useCategories()
    const {handleUpdate, handleAdd} = useSendProducts({id, setMessage})
  const handle = type == types.edit ? handleUpdate : handleAdd
  
  
  
  const handleClick = async(e)=>{
    const awaitAction  = await handle(e)
    setIsOpenOverlay(false)
    setRender()
  }

  useEffect(()=>{
    hookCategories.getCategories().then(data => setCategories(data))
  },[])

  const closeOverlay = () => {
    setIsOpenOverlay(false);
  };

  return (
    <div className="overlayEdit">
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5em', alignItems: 'center' }} onSubmit={handleClick}>
        <InputForm defaultValue={name} name={'name'} label={"Nombre"}  placeholder={name} type={'text'}  />
        <FieldSelect options={categories} name={'category'} defaultValue={category}/>
        <InputForm defaultValue={description} name={'description'} label={"Descripción"} placeholder={description} type={'text'} />
        <InputForm defaultValue={price} name={'price'} label={"Precio"} placeholder={price} type={'number'} />
        <div style={{ display: 'flex', width: '100%', gap: '1em' }}>
          <Button color="green" type={'submit'} onClick={onUpdate}>Actualizar</Button>
          <Button color="red" type={'button'} onClick={closeOverlay}>Cancelar</Button>
        </div>
      </form>
    </div>);
}


