import { useEffect, useState } from "react";
import {  getProducts } from "../../js/Products";
import Banner from "../../components/Banner";

// import dataMocks from "../mocks/products-menu1.json"

export default function Menu() {
  const [products, setProducts] = useState();
  
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
        
      <Banner/>
       
     
      </main>
    </div>
  );
}


