import { IndexMenu } from "../components/IndexMenu";
import { TitleMain } from "../components/TitleMain";
import { Dinamic1 } from "../components/Products/Dinamic1";
import { Dinamic2 } from "../components/Products/Dinamic2";
import { TableMenu } from "../components/Products/TableMenu";
import responseProducts from '../mocks/products-menu1.json'
import Beverage from "../components/Beverage";
import { useState } from "react";
import iconEdit from '../../public/edit.svg'
import iconCancel from  '../../public/cancel.svg'
import iconCheck from '../../public/check.svg'

export default function PageMenu({isLogged}) {
  const [isEditable, setIsEditable] = useState(false)



  const products = responseProducts?.Products
  
  return (
    <div className="background">
      <Optios/>
      <main id="top" className="wrapper-main">
        <TitleMain />
        <IndexMenu/>
        <section className="grid-wrapper">
         <TableMenu products={products} filter={'Tradicional'}/>
          <Dinamic1 products={products}/>
          <TableMenu 
            version={'BLACK'} 
            products={products} 
            title={"SUPER TRADICIONALES"}
            filter={'SuperTradicional'}
            />

          <Dinamic2 products={products}/>
          <Beverage/>
          <TableMenu
            version={'BLACK'}
            products={products}
            title = {'GASEOSA'}
            filter = {'Soda'}
            />
        </section>
      </main>
    </div>
  );
}

function Optios (){
  const [isEditable, setIsEditable] = useState(false)
  
  const handleClick = () =>{
    setIsEditable(!isEditable)
  }

  return(
    <aside className="optionsEdit">
      {
        isEditable 
        ?<>
          <img src={iconCheck} alt="Guardar" />
          <img src={iconCancel} alt="Cancelar" onClick={handleClick} />
        </> 
        : <img src={iconEdit} alt="Editar" onClick={handleClick}/>
      }
    </aside>
  )
}