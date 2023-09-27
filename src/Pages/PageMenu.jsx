import { IndexMenu } from "../components/IndexMenu";
import { TitleMain } from "../components/TitleMain";
import { Dinamic1 } from "../components/Products/Dinamic1";
import { Dinamic2 } from "../components/Products/Dinamic2";
import { TableMenu } from "../components/Products/TableMenu";
import Beverage from "../components/Beverage";
import { useEffect, useState } from "react";
import { addArrayProducts, getProducts } from "../js/Products";
import { Optios } from "../components/Products/Optios";
import { MessageOverlay } from "../components/MessageOverlay";
import {Products, first} from "../js/SubidaArray.js"
import { useUserContext } from "../providers/userContext";
import { ROL } from "../js/User";



export default function PageMenu({ isLogged }) {
  const [allowEdit, setAllowEdit] = useState(false);
  const [products, setProducts] = useState();
  const [message, setMessage]= useState()
  const [render, setRender] =  useState (true)

  
  const user = useUserContext()




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
  user?.Rol && console.log(user)
  return (
    <div className="background">
      <main id="top" className="wrapper-main">
        {message && <MessageOverlay message={message}/>} 
        <TitleMain />
        <IndexMenu />
        <button onClick={()=>{
          console.log(first)
          addArrayProducts(Products)
        }}>subir array</button>
        <div className="grid-wrapper" >
         {user?.Rol ==  ROL.ADMIN && <Optios allowEdit={allowEdit} setAllowEdit={setAllowEdit} /> }
          {products ? (
            <>
              <TableMenu
                products={products}
                filter={"Tradicional"}
                allowEdit={allowEdit}
                setMessage={setMessage}
                setRender={handleRender}
              />
              <Dinamic1 products={products} allowEdit={allowEdit} setRender={handleRender} setMessage={setMessage}/>
              <TableMenu
                version={"BLACK"}
                products={products}
                title={"SUPER TRADICIONALES"}
                filter={"SuperTradicional"}
                allowEdit={allowEdit}
                setMessage={setMessage}
                setRender={handleRender}
              />

              <Dinamic2 products={products} allowEdit={allowEdit} setRender={handleRender} setMessage={setMessage}/>
              <Beverage allowEdit={allowEdit} setRender={handleRender} />
              <TableMenu
                version={"BLACK"}
                products={products}
                title={"GASEOSA"}
                filter={"Soda"}
                allowEdit={allowEdit}
                setRender={handleRender}
              />
            </>
          ) : (
            <h1>cargando...</h1>
          )}
        </div>
      </main>
    </div>
  );
}


