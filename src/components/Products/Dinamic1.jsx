import { Products } from "./Products";
import { useFilter } from "../../hooks/useFilter";

// eslint-disable-next-line react/prop-types
export function Dinamic1({products, setMessage, setRender}) {
  
  const filteredByDinamic = useFilter(products,'category', 'Dinamic',0,1) 

  return (
    <section className="wrapper-dinamic1">
      <img
        className="dinamic1"
        id="elementDinamic1"
        src="../public/images/Arepa 1.png"
      alt="Arepa" />
      <div className="about-dinamic1">
      <Products products={filteredByDinamic} setMessage={setMessage} setRender={setRender}/>
      </div>
    </section>
  );
}
