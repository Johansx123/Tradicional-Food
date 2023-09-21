import { Product } from "./Product";

// eslint-disable-next-line react/prop-types
export function Products({ products, allowEdit, setMessage }) {
  return (
    <>
      {products ? (
        // eslint-disable-next-line react/prop-types
        products.map((product) => {
          return (
              <Product
                key={product.id}
                id={product.id}
                name={product.Name}
                description={product.description}
                price={product.price}
                allowEdit={allowEdit}
                setMessage={setMessage}
              />
          );
        })
      ) : (
        <h1 className='products-loader' >Cargando..</h1>
      )}
    </>
  );
}
