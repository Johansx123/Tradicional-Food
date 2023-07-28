import { ProductMenu } from "./ProductMenu";

export function Menu2() {
  return (
    <section id="perros" className="wrapper-menu2">
      <h2 className="title-menu1">SUPER TRADICIONALES</h2>
      <ProductMenu 
        title={'Burger'} 
        description={'Queso, jamón, carne de hamburguesa, cebolla caramelizada y papas.'}
        price={'$10.000'}
        />
        <ProductMenu 
          title={'Mega'} 
          description={'ueso, jamón, carne de hamburguesa, carne de res, pollo, cebolla'}
          price={'$12.000'}
          />
      <ProductMenu 
        title={'Doble Carne'} 
        description={'Queso, jamón, doble carne de hamburguesa, carne de res, pollo,cebolla caramelizada, papas y huevo de codorniz.'}
        price={'$14.900'}
        />
      
    </section>
  );
}
