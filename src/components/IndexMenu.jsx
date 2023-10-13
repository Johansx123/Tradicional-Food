import imgCornCake from '../../public/images/Arepa-Index.png'
import imgHotDog from '../../public/images/Perro-Index.png'
import imgJuice from '../../public/images/Jugo-index.png'
import { ItemIndexMenu } from './ItemIndexMenu';

export function IndexMenu() {
  return (
    <section className="wrapper-index">
      <ItemIndexMenu href={'#menu1'} img={imgCornCake}/>
      <ItemIndexMenu href={'#bebidas'} img={imgJuice}/>
      <ItemIndexMenu href={'#perros'} img={imgHotDog}/>
    </section>
  );
}
