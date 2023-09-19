import { InputForm } from "../atoms/InputForm";
import { Button } from "../atoms/Button";
import { updateProduct } from "../../js/Products";



export function OverlayEdit({ id, name, description, price, setIsOpenEdit }) {


  const handleSubmit = async (e) => {
    const fields = Object.fromEntries(new window.FormData(e.target));
    const name = fields?.name;
    const description = fields?.description;
    const price = fields?.price;
    const data = {
      name,
      description,
      price: parseFloat(price)
    };
    const message = await updateProduct(id, data);
    console.log(message);

  };

  const closeOverlay = () => {
    setIsOpenEdit(false);
  };

  return (
    <div className="overlayEdit">
      <form style={{ padding: '2em', display: 'flex', flexDirection: 'column', gap: '1.5em', alignItems: 'center' }} onSubmit={handleSubmit}>
        <InputForm name={'name'} label={"Nombre"} placeholder={name} type={'text'} key={1} />
        <InputForm name={'description'} label={"Descripción"} placeholder={description} type={'text'} />
        <InputForm name={'price'} label={"Precio"} placeholder={price} type={'number'} />

        <div style={{ display: 'flex', width: '100%', gap: '1em' }}>
          <Button color="green" type={'submit'}>Actualizar</Button>
          <Button color="red" type={'button'} onClick={closeOverlay}>Cancelar</Button>
        </div>

      </form>
    </div>);
}
