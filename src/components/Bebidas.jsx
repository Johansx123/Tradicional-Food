export function Bebidas() {
  return (
    <section id="bebidas" className="wrapper-jucie">
      <h2 className="subtitle">BEBIDAS</h2>

      <div className="wrapper-slider" id="Jucie">
        <h2 className="subtitle">Jugos</h2>

        <button className="prevButton" id="Jucie-prevBtn">
          <img src="./../public/up.png" alt="" />
        </button>

        <button className="nextButton" id="Jucie-nextBtn">
          <img src="./../public/up.png" alt="" />
        </button>

        <div className="slider" id="Jucie-slider">
          <div className="slide">
            <h2>Guanabana</h2>
            <div className="slide-d">
              <img className="item-slider" src="./../public/guanaBANA.png" />
              <div className="description">
                <h3>Agua</h3>
                <span className="price">$4.500</span>
                <h3>Leche</h3>
                <span className="price">$5.500</span>
              </div>
            </div>
          </div>

          <div className="slide">
            <h2>Mora</h2>
            <div className="slide-d">
              <img
                className="item-slider"
                src="./../public/jugo mora copia.png" />
              <div className="description">
                <h3>Agua</h3>
                <span className="price">$4.500</span>
                <h3>Leche</h3>
                <span className="price">$5.500</span>
              </div>
            </div>
          </div>
          <div className="slide">
            <h2>Lulo</h2>
            <div className="slide-d">
              <img className="item-slider" src="./../public/jugo de lulo.png" />
              <div className="description">
                <h3>Agua</h3>
                <span className="price">$4.500</span>
                <h3>Leche</h3>
                <span className="price">$5.500</span>
              </div>
            </div>
          </div>

          <div className="slide">
            <h2>Maracuya</h2>
            <div className="slide-d">
              <img
                className="item-slider"
                src="./../public/jugo de maracuya.png" />
              <div className="description">
                <h3>Agua</h3>
                <span className="price">$4.500</span>
                <h3>Leche</h3>
                <span className="price">$5.500</span>
              </div>
            </div>
          </div>

          <div className="slide">
            <h2>Uva</h2>
            <div className="slide-d">
              <img className="item-slider" src="./../public/jugo de uva.png" />
              <div className="description">
                <h3>Agua</h3>
                <span className="price">$4.500</span>
                <h3>Leche</h3>
                <span className="price">$5.500</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper-slider" id="OthersBeverage">
        <h2 className="subtitle">Otras bebidas</h2>
        <button className="prevButton" id="OthersBeverage-prevBtn">
          <img src="./../public/up.png" alt="" />
        </button>

        <button className="nextButton" id="OthersBeverage-nextBtn">
          <img src="./../public/up.png" alt="" />
        </button>

        <div className="slider" id="OthersBeverage-slider">
          <div className="slide">
            <h2>Coca Cola</h2>
            <div className="slide-d">
              <img className="item-slider" src="./../public/COCA-COLA.png" />
              <div className="description">
                <h3></h3>
                <span className="price"></span>
                <h3>400 ML</h3>
                <span className="price">$3.500</span>
              </div>
            </div>
          </div>
          <div className="slide">
            <h2>Colombiana</h2>
            <div className="slide-d">
              <img className="item-slider" src="./../public/Colombiana.png" />
              <div className="description">
                <h3></h3>
                <span className="price"></span>
                <h3>400 ML</h3>
                <span className="price">$3.500</span>
              </div>
            </div>
          </div>
          <div className="slide">
            <h2>Manzana</h2>
            <div className="slide-d">
              <img className="item-slider" src="./../public/MANZA.png" />
              <div className="description">
                <h3></h3>
                <span className="price"></span>
                <h3>400 ML</h3>
                <span className="price">$3.500</span>
              </div>
            </div>
          </div>
          <div className="slide">
            <h2>Mr Tea</h2>
            <div className="slide-d">
              <img className="item-slider" src="./../public/Mr.-tea.png" />
              <div className="description">
                <h3></h3>
                <span className="price"></span>
                <h3>500 ML</h3>
                <span className="price">$4.500</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
