import { Link } from 'react-router-dom';
import logo from '../../public/images/Branch.svg';
import iconLogIn from '../../public/images/Icon-login.svg';
import iconMenuBars from '../../public/images/IconMenu.svg'
import iconLogOut from '../../public/images/check-out.png'
import {useUserContext, useUserOutContext } from '../providers/userContext';
import { useState } from 'react';
export function Header() {
  
  const user = useUserContext();
  const outUser = useUserOutContext();
  
  const [isLogged,setisLogged]= useState(true)

  const handleLogOut = () =>{
    setisLogged(!isLogged)
    outUser()
  }
  return (
    <header className="wrapper-header">
      <Link className="logo" to = '/'><img src={logo} alt="Logo de Tradicional Food" /></Link>
      <nav className="content-menu-600">
             {/* <span><Link to='/'>Menu</Link></span> */}
             {/* <span><a href="">Pide en Linea</a></span>
             <span><a href="">Seguir</a></span> */}
           </nav>
           {user?.ID
              ? <Link className="icon-login" to='/LogIn' onClick={handleLogOut}><img src={iconLogOut} alt="Cerrar Sesión" /></Link> 
              : <Link className="icon-login" to='/LogIn'><img src={iconLogIn} alt="Inicio de Sesión" /></Link>}
           <nav className="content-menu-mobile">
             <img id="barsMenu" className="icon-menu" src={iconMenuBars} alt="Menu" />
           </nav>
    </header>
  );
}


