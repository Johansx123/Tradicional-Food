import imgCornCake from '../../public/Arepa-Index.png'
import imgHotDog from '../../public/Perro-Index.png'
import imgJucie from '../../public/Jugo-index.png'
import { ItemIndexMenu } from './ItemIndexMenu';

export function IndexMenu() {
  return (
    <section className="wrapper-index">
      <ItemIndexMenu href={'#menu1'} img={imgCornCake}/>
      <ItemIndexMenu href={'#bebidas'} img={imgJucie}/>
      <ItemIndexMenu href={'#perros'} img={imgHotDog}/>
    </section>
  );
}
