import { ProductMenu } from "./ProductMenu";

// eslint-disable-next-line react/prop-types
export function Products({ products }) {
  return (
    <>
      {products ? (
        // eslint-disable-next-line react/prop-types
        products.map((product) => {
          return (
            <ProductMenu
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          );
        })
      ) : (
        <h2>Cargando..</h2>
      )}
    </>
  );
}
