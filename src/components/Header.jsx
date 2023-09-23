import { Link } from 'react-router-dom';
import logo from '../../public/images/Branch.svg';
import iconLogIn from '../../public/images/Icon-login.svg';
import iconMenuBars from '../../public/images/IconMenu.svg'
export function Header() {
  return (
    <header className="wrapper-header">
      <Link className="logo" to = '/'><img src={logo} alt="Logo de Tradicional Food" /></Link>
      <nav className="content-menu-600">
             {/* <span><Link to='/'>Menu</Link></span> */}
             {/* <span><a href="">Pide en Linea</a></span>
             <span><a href="">Seguir</a></span> */}
           </nav>
           <Link className="icon-login" to='/LogIn'><img src={iconLogIn} alt="Inicio de Sesión" /></Link>
           <nav className="content-menu-mobile">
             <img id="barsMenu" className="icon-menu" src={iconMenuBars} alt="Menu" />
           </nav>
    </header>
  );
}

const MenuMobile = () =>{
  return
}
