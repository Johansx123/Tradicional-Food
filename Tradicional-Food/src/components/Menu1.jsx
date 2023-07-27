export function Menu1() {
  return (
    <section id="menu1" className="wrapper-menu1">
      <div id="" className="back-menu1 back-size">
        <div className="top-back-menu1">
          <img src="../public/lt.svg" alt="" className="backLt" />
          <img src="../public/rt.svg" alt="" className="backRt" />
        </div>
        <div className="bottom-back-menu1">
          <img src="../public/lb.svg" alt="" className="backLb" />
          <img src="../public/rb.svg" alt="" className="backRb" />
        </div>
      </div>
      <div className="content-menu1 back-size">
        <h2 className="title-menu1">AREPA</h2>

        <span className="subtitle-menu1">
          <h2>Tradicional</h2>
          <img src="../public/viento.svg" alt="" />
        </span>

        <div className="group-menu1">
          <div className="contentL">
            <h3>Chorizo</h3>
            <span className="description d-menu1 ">
              Chorizo ahumado con carne de res y cerdo.
            </span>
          </div>
          <span className="price price-menu1">$4.000</span>
        </div>

        <div className="group-menu1">
          <div className="contentL">
            <h3>Gemelas</h3>
            <span className="description d-menu1 ">
              Queso, Jamón y papas chips.
            </span>
          </div>
          <span className="price price-menu1">$4.000</span>
        </div>

        <div className="group-menu1">
          <div className="contentL">
            <h3>Carne</h3>
            <span className="description d-menu1">
              Tierna carne de res, cebolla caramelizada, papas chips y huevo de
              codorniz.
            </span>
          </div>
          <span className="price price-menu1"> $11.000 </span>
        </div>

        <div className="group-menu1">
          <div className="contentL">
            <h3>Pollo</h3>
            <span className=" description d-menu1">
              Julianas de pollo, cebolla caramelizada, papas chips y huevo de
              codorniz.
            </span>
          </div>
          <span className="price price-menu1"> $10.000 </span>
        </div>

        <div className="group-menu1">
          <div className="contentL">
            <h3>Mixta</h3>
            <span className="description d-menu1">
              Combinación perfecta entre carne de pollo y de res, cebolla
              caramelizada, papas chips y huevos de codorniz.
            </span>
          </div>
          <span className="price price-menu1"> $10.000 </span>
        </div>
      </div>
    </section>
  );
}
