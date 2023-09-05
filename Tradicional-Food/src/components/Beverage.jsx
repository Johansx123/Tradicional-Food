import { Product } from "./Products/Product";
import SliderBeverage from "./Products/slider-berverage";

export default function Beverage ({allowEdit}) {
    return(
        <section id="bebidas" className="beverage-wrapper" >
            <h2 className="Title-30 TitleMenuBlack">JUGOS</h2>
            <div className="slider">
                <SliderBeverage/>
            </div>
            <footer className="fontWhite about-black">
                <Product title={'Agua'} price={'$2.500'} allowEdit={allowEdit}/>    
                <Product title={'Leche'} price={'$3.500'} allowEdit={allowEdit}/>    
            </footer>

        </section>
    )
} 
