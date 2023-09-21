import { IndexMenu } from "../components/IndexMenu";
import { TitleMain } from "../components/TitleMain";
import { Dinamic1 } from "../components/Products/Dinamic1";
import { Dinamic2 } from "../components/Products/Dinamic2";
import { TableMenu } from "../components/Products/TableMenu";
import responseProducts from "../mocks/products-menu1.json";
import Beverage from "../components/Beverage";
import { useEffect, useState } from "react";
import iconCheck from "../../public/check.svg";
import { addArrayProducts, addProduct, getProducts, removeProduct, updateProduct } from "../js/Products";
import { OverlayEdit } from "../components/Products/OverlayEdit";
import { Optios } from "../components/Products/Optios";



export default function PageMenu({ isLogged }) {
  const [allowEdit, setAllowEdit] = useState(false);
  const [products, setProducts] = useState();
  const [message, setMessage]= useState()
  const [render, setRender] =  useState (true)


  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, [render]);

  const handleSubmit  = () =>{
    alert('enviado')
  }

  
  return (
    <div className="background">
      <main id="top" className="wrapper-main">
        {message ? <MessageOverlay message={message}/>:null } 
        <TitleMain />
        <IndexMenu />
        
        <div className="grid-wrapper" onSubmit={handleSubmit}>
         <Optios allowEdit={allowEdit} setAllowEdit={setAllowEdit} /> 
          {products ? (
            <>
              <TableMenu
                products={products}
                filter={"Tradicional"}
                allowEdit={allowEdit}
                setMessage={setMessage}
              />
              <Dinamic1 products={products} allowEdit={allowEdit} />
              <TableMenu
                version={"BLACK"}
                products={products}
                title={"SUPER TRADICIONALES"}
                filter={"SuperTradicional"}
                allowEdit={allowEdit}
                setMessage={setMessage}
              />

              <Dinamic2 products={products} allowEdit={allowEdit} />
              <Beverage allowEdit={allowEdit} />
              <TableMenu
                version={"BLACK"}
                products={products}
                title={"GASEOSA"}
                filter={"Soda"}
                allowEdit={allowEdit}
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

function MessageOverlay ({message}){
const [color, setColor] = useState('red')

  const classNameColor = message ? 'green' : 'red'

  return (
    <div className={`MessageOverlay ${color} `}>
      <img src={iconCheck} alt="" />
      <h4 className={`message ${color}`}>
         {message}
      </h4>
    </div>
  )
}
