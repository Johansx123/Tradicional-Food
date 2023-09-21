import { InputForm } from "../atoms/InputForm";
import { Button } from "../atoms/Button";
import { addArrayProducts } from "../../js/Products";
import { useEffect, useState } from "react";
import { useSendProducts } from "../../hooks/useSendProducts";



export function OverlayEdit({setMessage, id, name, description, price, setIsOpenOverlay, type}) {

  const types = {
    edit : 'edit',
    add : 'add'
  }
  const [categories , setCategories] = useState()
  
  const {handleUpdate, handleAdd} = useSendProducts({id, setMessage})
  const handle = type == types.edit ? handleUpdate : handleAdd
  

  useEffect(()=>{
    fetch ('https://api.tradicionalfood.com/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])
 

  const closeOverlay = () => {
    setIsOpenOverlay(false);
  };

  return (
    <div className="overlayEdit">
     
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5em', alignItems: 'center' }} onSubmit={handle}>
        <InputForm defaultValue={name} name={'name'} label={"Nombre"}  placeholder={name} type={'text'}  />
        <div className="fieldForm">
        <label className='Font-small-15'htmlFor="category">Categoria</label>
        <select  className=" fieldForm-input" name="category" id="category">
          <option value="-1">Seleccione una Categoria</option>
          {categories
            ? categories.map(e => {
              return <option value={e.category_id} key={e.category_id}>{e.categoty_name}</option>
            })
            : null
          }
        </select>
        </div>
        <InputForm defaultValue={description} name={'description'} label={"Descripción"} placeholder={description} type={'text'} />
        <InputForm defaultValue={price} name={'price'} label={"Precio"} placeholder={price} type={'number'} />
        <div style={{ display: 'flex', width: '100%', gap: '1em' }}>
          <Button color="green" type={'submit'}>Actualizar</Button>
          <Button color="red" type={'button'} onClick={closeOverlay}>Cancelar</Button>
        </div>

      </form>
    </div>);
}


