import { useFilter } from "../../hooks/useFilter";
import { Products } from "./Products";
import imgDinamic from '../../../public/images/Perro animado.png'
import imgElement from '../../../public/images/Mantel 1.png'
// eslint-disable-next-line react/prop-types
export function Dinamic2({products, setMessage, setRender}) {

  const filteredByDinamic = useFilter(products, 'category', 'Dinamic', 1, 2)

  return (
    <section id="box" className="wrapper-dinamic2">
      <div className="dinamic2">

        <img className="element1" src={imgElement} alt="Mantel" />
        <img
          id="perro"
          className="element2"
          src={imgDinamic}
          alt="Super chori perro" />
      </div>

      <div className="about-dinamic1">
        
         <Products products={filteredByDinamic}  setMessage={setMessage} setRender={setRender} />
      </div>
    </section>
  );
}
