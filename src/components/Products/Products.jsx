import { Product } from "./Product";

// eslint-disable-next-line react/prop-types
export function Products({ products, allowEdit, setMessage , setRender}) {
    
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
                category={product.category}
                description={product.description}
                price={product.price}
                allowEdit={allowEdit}
                setMessage={setMessage}
                setRender={setRender}
              />
          );
        })
      ) : (
        <h1 className='products-loader' >Cargando..</h1>
      )}
    </>
  );
}
