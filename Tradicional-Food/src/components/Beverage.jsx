import { Product } from "./Products/Product";
import SliderBeverage from "./Products/slider-berverage";

export default function Beverage () {
    return(
        <section className="beverage-wrapper">
            <h2 className="Title-30">JUGOS</h2>
            <div className="slider">
                <SliderBeverage/>
            </div>
            <footer className="fontWhite about-black">
                <Product title={'Agua'} price={'$2.500'}/>    
                <Product title={'Leche'} price={'$3.500'}/>    
            </footer>

        </section>
    )
} 
