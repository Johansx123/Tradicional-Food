import { Product } from "./Products/Product";
import JugoDeFresa from "../../public/Jugo de Fresa.png"
export default function Beverage () {
    return(
        <section className="beverage-wrapper">
            <h2 className="Title-30">BEBIDAS</h2>
            <div className="slider">
                <div className="carousel">
                    <img src={JugoDeFresa}  alt="" />
                </div>
            </div>
            <footer className="fontWhite about-black">
                <Product title={'Agua'} price={'$2.500'}/>    
                <Product title={'Leche'} price={'$3.500'}/>    
            </footer>

        </section>
    )
}