

function App() {
  return(
   <>
      <header className="wrapper-header">
  <a className="logo" href=""><img src="images/Mobile/Branch.svg" alt="Logo de Tradicional Food" /></a>
   {/* <nav className="content-menu-600">
    <span><a href="">Inicio</a></span>
    <span><a href="">Pide en Linea</a></span>
    <span><a href="">Seguir</a></span>
  </nav>
  <a className="icon-login" href=""><img src="images/Mobile/Icon-login.svg" alt="Inicio de Sesión" /></a>
  <nav className="content-menu-mobile">
    <img id="barsMenu" className="icon-menu" src="images/Mobile/IconMenu.svg" alt="Menu" />
  </nav> */}


</header>
  <div className="background">

  
  <a href="#top" id="up" className="up"><img src="images/Mobile/up.png" alt=""/></a>
  <main id="top" className="wrapper-main">
    <div className="wrapper-title">

      <h1 className="title">MENU</h1>
      <span><img className="vector-title" src="images/Mobile/Rectangle 6.png" alt=""/></span>
    </div>
    <section className="wrapper-index">
      <a href="#menu1" className="item-index"><img src="images/Mobile/Arepa-Index.png" alt="Ir a menu arepas" /></a>
      <a href="#bebidas" className="item-index"><img src="images/Mobile/Jugo-index.png" alt="Ir a menu bebidas" /></a>
      <a href="#perros" className="item-index"><img src="images/Mobile/Perro-Index.png" alt="Ir a menu perros" /></a>
    </section>
    <section className="grid-wrapper">

      
        <section id="menu1" className="wrapper-menu1">
          <div id="" className="back-menu1 back-size">
            <div className="top-back-menu1">
              <img src="images/Mobile/lt.svg" alt="" className="backLt"/>
              <img src="images/Mobile/rt.svg" alt="" className="backRt"/>
            </div>
            <div className="bottom-back-menu1">
              <img src="images/Mobile/lb.svg" alt="" className="backLb"/>
              <img src="images/Mobile/rb.svg" alt="" className="backRb"/>
            </div>
          </div>
          <div className="content-menu1 back-size">

            <h2 className="title-menu1">AREPA</h2>

            <span className="subtitle-menu1">
              <h2>Tradicional</h2>
              <img src="images/Mobile/viento.svg" alt="" />
            </span>

            <div className="group-menu1">
              <div className="contentL">

                <h3>Chorizo</h3>
                <span className="description d-menu1 ">Chorizo ahumado con carne de res y cerdo.</span>
              </div>
              <span className="price price-menu1">$4.000</span>
            </div>

            <div className="group-menu1">
              <div className="contentL">

                <h3>Gemelas</h3>
                <span className="description d-menu1 ">Queso, Jamón y papas chips.</span>
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




        <section className="wrapper-dinamic1">
          <img className="dinamic1" id="elementDinamic1" src="images/Mobile/Arepa 1.png" alt="Arepa" />
          <div className="about-dinamic1">
            <span className="description">
              Queso, jamón, carne de hamburguesa, carne de res, pollo, cebolla
              caramelizada, papas y huevo de codorniz.
            </span>
            <span className="price">
              $12.000
            </span>
          </div>
        </section>
      


        <section id="perros" className="wrapper-menu2">
          <h2 className="title-menu1">SUPER TRADICIONALES</h2>
          <div className="group-menu1">
            <div className="contentL">

              <h3>Burger</h3>
              <span className="description">Queso, jamón, carne de hamburguesa,
                cebolla caramelizada y papas.
              </span>
            </div>
            <span className="price price-menu1">$10.000</span>
          </div>

          <div className="group-menu1">
            <div className="contentL">

              <h3>Mega</h3>
              <span className="description">Queso, jamón, carne de hamburguesa, carne de res, pollo, cebolla
                caramelizada, papas y huevo de codorniz.
              </span>
            </div>
            <span className="price price-menu1">$12.000</span>
          </div>

          <div className="group-menu1">
            <div className="contentL">
              <h3>Doble Carne</h3>
              <span className="description">
                Queso, jamón, doble carne de hamburguesa, carne de res, pollo, cebolla
                caramelizada, papas y huevo de codorniz.
              </span>
            </div>
            <span className="price price-menu1">$14.900</span>
          </div>
        </section>

        <section id="box" className="wrapper-dinamic2">
          <div className="dinamic2">
            <img className="element1" src="./images/Mobile/Mantel 1.png" alt="Mantel"/>
            <img id="perro" className="element2" src="./images/Mobile/Perro animado.png" alt="Super chori perro"/>
          </div>

          <div className="about-dinamic1">
             {/* <h2>Super Perros</h2>  */}
            <div className="group-menu1 ">

              <div>
                <h3>Súper Choriperro</h3>

                <span className="description">
                  Pan perro, mortadela, jamón,
                  queso, chorizo, carne de res,
                  pollo, cebolla caramelizada y papas.
                </span>
              </div>

              <span className="price">
                $12.000
              </span>
            </div>
          </div>
        </section>
    
      
        
        
        
        <section id="bebidas" className="wrapper-jucie">
          <h2 className="subtitle">BEBIDAS</h2>

          <div className="wrapper-slider" id="Jucie">
            <h2 className="subtitle">Jugos</h2>
            
            
            <button className="prevButton" id="Jucie-prevBtn"><img src="./images/Mobile/up.png" alt=""/></button>
            
            
            <button className="nextButton" id="Jucie-nextBtn"><img src="./images/Mobile/up.png" alt=""/></button>
  
            <div className="slider" id="Jucie-slider">
              
              
              
              
              
              <div className="slide">
                
                <h2>Guanabana</h2>
                <div className="slide-d">
                  <img className="item-slider" src="./images/Mobile/guanaBANA.png"/>
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
                  <img className="item-slider" src="./images/Mobile/jugo mora copia.png"/>
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
                  <img className="item-slider" src="./images/Mobile/jugo de lulo.png"/>
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
                  <img className="item-slider" src="./images/Mobile/jugo de maracuya.png"/>
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
                  <img className="item-slider" src="./images/Mobile/jugo de uva.png"/>
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
              <button className="prevButton" id="OthersBeverage-prevBtn"><img src="./images/Mobile/up.png" alt=""/></button>
            
            
             <button className="nextButton" id="OthersBeverage-nextBtn"><img src="./images/Mobile/up.png" alt=""/></button>
  
              
              <div className="slider" id="OthersBeverage-slider">
                
                
                
                
                
                <div className="slide">
                  
                <h2>Coca Cola</h2>
                <div className="slide-d">
                  <img className="item-slider" src="./images/Mobile/COCA-COLA.png"/>
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
                  <img className="item-slider" src="./images/Mobile/Colombiana.png"/>
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
                  <img className="item-slider" src="./images/Mobile/MANZA.png"/>
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
                  <img className="item-slider" src="./images/Mobile/Mr.-tea.png"/>
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
      
      
      
    </section>

  </main>
  <script type="module" src="../js/scriptsMenu.js"></script>
</div>

<footer className="wrapper-footer">
  <h2>Contáctenos</h2>
  <section className="wrapper-social">
    <div className="item-social">
      <a href="https://api.whatsapp.com/send?phone=573196095864"
        rel="me nofollow noopener noreferrer" target="_blank">
        <span className="icon-social"><img src="images/Mobile/Whatsapp.svg" alt=""/></span>
        <p>3196095864</p>
      </a>
    </div>
    <div className="item-social">
      <a href="mailto:tradicionalfoodarepasymas@gmail.com">
        <span className="icon-social"><img src="images/Mobile/Gmiail.svg" alt=""/></span>
        <p>tradicionalfoodarepasymas@gmail.com</p>
      </a>
    </div>
    <div className="item-social">
      <a target="_blank" href="https://www.instagram.com/tradicional_food_arepas/">
        <span className="icon-social"><img src="images/Mobile/Instagram.svg" alt=""/></span>
        <p>tradicional_food_arepas</p>
      </a>
    </div>
    <div className="item-social">
      <a href="https://www.facebook.com/profile.php?id=100071820720640">
        <span className="icon-social"><img src="images/Mobile/Facebook.svg" alt=""/></span>
        <p>Tradicional Arepas Mas</p>
      </a>
    </div>
  </section>

  <span><img src="images/Mobile/Branch-black.svg" alt=""/></span>
  <span id="botoom" className="cp">Copyright 2022 | Tradicional Food</span>

</footer>

      </>
      
  )
}

export default App
