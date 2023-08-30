import { IndexMenu } from "../components/IndexMenu";
import { TitleMain } from "../components/TitleMain";
import { Dinamic1 } from "../components/Products/Dinamic1";
import { Dinamic2 } from "../components/Products/Dinamic2";
import { TableMenu } from "../components/Products/TableMenu";
import responseProducts from '../mocks/products-menu1.json'
import Beverage from "../components/Beverage";

export default function PageMenu() {

  const products = responseProducts?.Products
  
  return (
    <div className="background">
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