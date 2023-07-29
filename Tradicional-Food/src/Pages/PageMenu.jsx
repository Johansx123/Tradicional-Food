import { IndexMenu } from "../components/IndexMenu";
import { TitleMain } from "../components/TitleMain";
import { Dinamic1 } from "../components/Products/Dinamic1";
import { Dinamic2 } from "../components/Products/Dinamic2";
import { Bebidas } from "../components/Bebidas";
import { TableMenu } from "../components/Products/TableMenu";
import responseProducts from '../mocks/products-menu1.json'
import Beverage from "../components/Beverage";

export function PageMenu() {
  const products = responseProducts?.Products
  
  return (
    <div className="background">
      <main id="top" className="wrapper-main">
        <TitleMain />
        <IndexMenu/>
        <section className="grid-wrapper">
         <TableMenu products={products}/>
          <Dinamic1 products={products}/>
          <TableMenu version={'BLACK'} products={products}/>
          <Dinamic2 products={products}/>
          <Beverage/>
        </section>
      </main>
    </div>
  );
}