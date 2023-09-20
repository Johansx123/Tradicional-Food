import { InputForm } from "../atoms/InputForm";
import { Button } from "../atoms/Button";
import { addArrayProducts, addProduct, updateProduct } from "../../js/Products";
import { useEffect, useState } from "react";



export function OverlayEdit({ id, name, description, price, setIsOpenOverlay }) {

  const [categories , setCategories] = useState()
  
  const {handleUpdate, handleAdd} = useSendProducts({id})
  


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
      <form style={{ padding: '2em', display: 'flex', flexDirection: 'column', gap: '1.5em', alignItems: 'center' }} onSubmit={handleAdd}>
        <InputForm name={'name'} label={"Nombre"} placeholder={name} type={'text'}  />
        <div className="fieldForm">
        <label className='Font-small-15'htmlFor="category">Categoria</label>
        <select className=" fieldForm-input" name="category" id="category">
          <option value="-1">Seleccione una Categoria</option>
          {categories
            ? categories.map(e => {
              return <option value={e.categoty_name} key={e.category_id}>{e.categoty_name}</option>
            })
            : null
          }
        </select>
        </div>
        <InputForm name={'description'} label={"Descripción"} placeholder={description} type={'text'} />
        <InputForm name={'price'} label={"Precio"} placeholder={price} type={'number'} />

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
      category,
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
      category :'Tradicional',
      price: parseFloat(price)
    };
    const message = await addProduct(data);
    console.log(message);
  }

  return {handleUpdate, handleAdd}
}