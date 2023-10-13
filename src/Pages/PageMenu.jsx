import { IndexMenu } from "../components/IndexMenu";
import { TitleMain } from "../components/TitleMain";
import { Dinamic1 } from "../components/Products/Dinamic1";
import { Dinamic2 } from "../components/Products/Dinamic2";
import { TableMenu } from "../components/Products/TableMenu";
import Beverage from "../components/Beverage";
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
  const [render, setRender] =  useState (true)

  useEffect(()=>{
    window.scrollTo(0,0)
  }
  ,
    [])

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, [render]);
  
  useEffect(()=>{
    setTimeout(()=>{
      setMessage(null)
    },2000)
  },[message])
  const handleRender = () =>{
    setRender(!render)
  }

  return (
    <div className="background">
      <main id="top" className="wrapper-main">
        {message && <MessageOverlay message={message}/>} 
        <TitleMain />
        <IndexMenu />
        {/* <button onClick={()=>{ 
          console.log(first)
          addArrayProducts(Products)
        }}>subir array</button> */}
        <div className="grid-wrapper" >
        
          {products ? (
            <>
              <TableMenu products={products} filter={"Tradicional"}  setMessage={setMessage} setRender={handleRender} />
              <Dinamic1 products={products}  setRender={handleRender} setMessage={setMessage}/>
              <TableMenu version={"BLACK"} products={products} title={"SUPER TRADICIONALES"} filter={"SuperTradicional"}  setMessage={setMessage} setRender={handleRender}/>
              <Dinamic2 products={products}  setRender={handleRender} setMessage={setMessage}/>
              <Beverage  setRender={handleRender} />
              <TableMenu version={"BLACK"} products={products} title={"GASEOSA"} filter={"Soda"}  setRender={handleRender}/>
            </>
          ) : (
            <h3>cargando...</h3>
          )}
        </div>
      </main>
    </div>
  );
}


