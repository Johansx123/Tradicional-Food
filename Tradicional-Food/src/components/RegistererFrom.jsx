import { Link } from "react-router-dom";
import { Button } from "./atoms/Button";
import { PageForms } from "./PageForms";
import { useState } from "react";

export function RegistererFrom() {
const[numPage,setNumPage] = useState(1)


const handleClick = () =>{
  setNumPage(numPage + 1)
}
const handleSubmmit = () =>{
  window.location.pathname = '/a'
}

  return (
    <div className="wrapper-form">
      <hgroup className="hgroup-form">
        <h1 className="Title-30">Crea tu Cuenta</h1>
        <p className="Font-slim-15">¿Ya tienes una?<Link to={'/LogIn'} className="Font-slim-15">Inicia Sesión </Link></p>
      </hgroup>

      <form action="" className="form" onSubmit={handleSubmmit}>
        <div className="pages">

          <PageForms numPage={1} inputs={[
            {
              name: "userName",
              label: "Nombre",
              type: "text"
            },
            {
              name: "userLastName",
              label: "Apellido",
              type: "text"
            }
          ]} />
          <PageForms numPage={2} inputs={[
            {
              name: "userPhone",
              label: "Telfono",
              type: "tel"
            },
            {
              name: "userEmail",
              label: "Correo",
              type: "email"
            }
          ]} />
          <PageForms numPage={3} inputs={[
            {
              name: "userPassword",
              label: "Contraseña",
              type: "password"
            },
            {
              name: "userConfirmPassword",
              label: "Confirma tu contraseña",
              type: "password"
            }
          ]} />
        </div>
        <StepsLineForm step={numPage}/>
        <Link onClick={handleClick} >
        <Button type={numPage < 2 ? '':'submit'}>
          {
            numPage < 3 ? 'Siguiente': 'Registrarse'
          }
        </Button>
        </Link>
      </form>
    </div>
  );
}
// eslint-disable-next-line react/prop-types
function StepsLineForm ({step}) {
  const positions = {
    '1':'',
    '2':'center',
    '3':'right'
  }
  const className = positions[step]
  return(
    <div className={`form-stepsLine ${className}`}>
          <div className="form-stepsLine-step"></div>
        </div>
  )
}