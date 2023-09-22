import { addProduct, updateProduct } from "../js/Products";

export const useSendProducts = ({ id, setMessage }) => {

  const handleUpdate = async (e) => {
    e.preventDefault()
    const fields = Object.fromEntries(new window.FormData(e.target));
    const name = fields?.name;
    const description = fields?.description;
    const price = fields?.price;
    const category = fields?.category;
    const data = {
      name,
      category: parseFloat(category),
      description,
      price: parseFloat(price)
    };
    const message = await updateProduct(id, data);
    setMessage(message.message);

  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const fields = Object.fromEntries(new window.FormData(e.target));
    const name = fields?.name;
    const description = fields?.description;
    const price = fields?.price;
    const category = fields?.category;
    const data = {
      name,
      description,
      category: parseFloat(category),
      price: parseFloat(price)
    };
    const message = await addProduct(data);
    setMessage(message.message);
    
  };

  return { handleUpdate, handleAdd };
};
