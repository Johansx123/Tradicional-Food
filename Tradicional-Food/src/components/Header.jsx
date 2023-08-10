import logo from '../../public/Branch.svg';
import iconLogIn from '../../public/Icon-login.svg';
import iconMenuBars from '../../public/IconMenu.svg'
export function Header() {
  return (
    <header className="wrapper-header">
      <a className="logo" href=""><img src={logo} alt="Logo de Tradicional Food" /></a>
      <nav className="content-menu-600">
             <span><a href="">Inicio</a></span>
             <span><a href="">Pide en Linea</a></span>
             <span><a href="">Seguir</a></span>
           </nav>
           <a className="icon-login" href=""><img src={iconLogIn} alt="Inicio de Sesión" /></a>
           <nav className="content-menu-mobile">
             <img id="barsMenu" className="icon-menu" src={iconMenuBars} alt="Menu" />
           </nav>


    </header>
  );
}
