import axios from "axios";

export default  function  useCategories () {
  const getCategories = async () => {
    return await axios.get('/api/categories').then(response =>  response.data).catch(e => console.log(e));
  };
  return { getCategories };
}
