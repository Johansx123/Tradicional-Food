import { InputForm } from "../atoms/InputForm";
import { Button } from "../atoms/Button";
import { addArrayProducts, addProduct, updateProduct } from "../../js/Products";
import { useEffect, useState } from "react";



export function OverlayEdit({ id, name, description, price, setIsOpenOverlay, type }) {

  const types = {
    edit : 'edit',
    add : 'add'
  }
  const [categories , setCategories] = useState()
  const {handleUpdate, handleAdd} = useSendProducts({id})
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
      <form style={{ padding: '2em', display: 'flex', flexDirection: 'column', gap: '1.5em', alignItems: 'center' }} onSubmit={handle}>
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


const useSendProducts = ({ id}) =>{

  const handleUpdate = async (e) => {
    const fields = Object.fromEntries(new window.FormData(e.target));
    const name = fields?.name;
    const description = fields?.description;
    const price = fields?.price;
    const category = fields?.category
    const data = {
      name,
      category: parseFloat (category),
      description,
      price: parseFloat(price)
    };
    const message = await updateProduct(id, data);
    console.log(message);

  };

  const handleAdd = async (e) =>{
    e.preventDefault()
    const fields = Object.fromEntries(new window.FormData(e.target));
    const name = fields?.name;
    const description = fields?.description;
    const price = fields?.price;
    const category = fields?.category;
    const data = {
      name,
      description,
      category :parseFloat (category),
      price: parseFloat(price)
    };
    const message = await addProduct(data);
    console.log(message);
  }

  return {handleUpdate, handleAdd}
}