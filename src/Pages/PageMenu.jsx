import { useEffect, useState } from "react";
import {  getProducts } from "../js/Products";
import { MessageOverlay } from "../components/MessageOverlay";
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
  


  return (
    <div className="background">
      <main id="top" className="wrapper-main">
        
     
       
     
      </main>
    </div>
  );
}


