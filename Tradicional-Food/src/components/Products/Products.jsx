import { Product } from "./Product";

// eslint-disable-next-line react/prop-types
export function Products({ products }) {
  return (
    <>
      {products ? (
        // eslint-disable-next-line react/prop-types
        products.map((product) => {
          return (
              <Product
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
              />
          );
        })
      ) : (
        <h1 className='products-loader' >Cargando..</h1>
      )}
    </>
  );
}