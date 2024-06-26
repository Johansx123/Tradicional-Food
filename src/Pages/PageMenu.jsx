import { useEffect, useState } from "react";
import { addArrayProducts, getProducts } from "../js/Products";
import { MessageOverlay } from "../components/MessageOverlay";
import {Products, first} from "../js/SubidaArray.js"
import { useUserContext } from "../providers/userContext";
import { ROL } from "../js/User";
// import dataMocks from "../mocks/products-menu1.json"



export default function PageMenu() {
  const [products, setProducts] = useState();
  const [message, setMessage]= useState()
  

  useEffect(()=>{
    window.scrollTo(0,0)
  }
  ,
    [])

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);
  
  useEffect(()=>{
    setTimeout(()=>{
      setMessage(null)
    },2000)
  },[message])

  return (
    <div className="background">
      <main id="top" className="wrapper-main">
        {message && <MessageOverlay message={message}/>} 
     
       
     
      </main>
    </div>
  );
}


