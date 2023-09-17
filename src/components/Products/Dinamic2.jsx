import { useFilter } from "../../hooks/useFilter";
import { Products } from "./Products";

// eslint-disable-next-line react/prop-types
export function Dinamic2({products, allowEdit}) {

  const filteredByDinamic = useFilter(products, 'category', 'Dinamic', 1, 2)

  return (
    <section id="box" className="wrapper-dinamic2">
      <div className="dinamic2">

        <img className="element1" src="./../public/Mantel 1.png" alt="Mantel" />
        <img
          id="perro"
          className="element2"
          src="./../public/Perro animado.png"
          alt="Super chori perro" />
      </div>

      <div className="about-dinamic1">
        
         <Products products={filteredByDinamic} allowEdit={allowEdit} />
      </div>
    </section>
  );
}
