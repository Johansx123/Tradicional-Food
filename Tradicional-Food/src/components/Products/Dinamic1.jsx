import { Products } from "./Products";
import { useFilter } from "../../hooks/useFilter";

// eslint-disable-next-line react/prop-types
export function Dinamic1({products}) {
  
  const filteredByDinamic = useFilter(products,'category', 'Dinamic') 
  return (
    <section className="wrapper-dinamic1">
      <img
        className="dinamic1"
        id="elementDinamic1"
        src="../public/Arepa 1.png"
      alt="Arepa" />
      <div className="about-dinamic1">
      <Products products={filteredByDinamic}/>
      </div>
    </section>
  );
}
