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
  const [allowEdit, setAllowEdit] = useState(false)



  const products = responseProducts?.Products
  
  return (
    <div className="background">
      <Optios allowEdit={allowEdit} setAllowEdit={setAllowEdit}/>
      <main id="top" className="wrapper-main">
        <TitleMain />
        <IndexMenu/>
        <section className="grid-wrapper">
         <TableMenu products={products} filter={'Tradicional'} allowEdit={allowEdit}/>
          <Dinamic1 products={products} allowEdit={allowEdit}/>
          <TableMenu 
            version={'BLACK'} 
            products={products} 
            title={"SUPER TRADICIONALES"}
            filter={'SuperTradicional'}
            allowEdit={allowEdit}
            />

          <Dinamic2 products={products} allowEdit={allowEdit}/>
          <Beverage allowEdit={allowEdit}/>
          <TableMenu
            version={'BLACK'}
            products={products}
            title = {'GASEOSA'}
            filter = {'Soda'}
            allowEdit={allowEdit}
            />
        </section>
      </main>
    </div>
  );
}

function Optios ({allowEdit, setAllowEdit}){
  
  const handleClick = () =>{
    setAllowEdit(!allowEdit)
  }

  return(
    <aside className="optionsEdit">
      {
        allowEdit 
        ?<>
          <img src={iconCheck} alt="Guardar" style={{cursor:'pointer'}} />
          <img src={iconCancel} alt="Cancelar" style={{cursor:'pointer'}}  onClick={handleClick} />
        </> 
        : <img src={iconEdit} alt="Editar" style={{cursor:'pointer'}}  onClick={handleClick}/>
      }
    </aside>
  )
  
}