import { Link } from "react-router-dom";
import { Button } from "./atoms/Button";
import { PageForms } from "./PageForms";
import {  useState } from "react";
import { StepsLineForm } from "./atoms/StepsLineForm";

export function RegistererFrom() {
const[numPage,setNumPage] = useState(1)
const className = {
  '1':'',
  '2':'center',
  '3':'right'
}


const handleClick = () =>{
  setNumPage(numPage + 1)
}
const handleSubmit = (e) =>{
  e.preventDefault()
  const fields = Object.fromEntries(new window.FormData(e.target))
  
  console.log(fields)
}
const handleInvalid = (e) =>{
  const inputs = e.target
  
  inputs.classList.add('invalid')
  inputs.value = ''
  setNumPage(1)
}

  return (
    <div className="wrapper-form">
      <hgroup className="hgroup-form">
        <h1 className="Title-30">Crea tu Cuenta</h1>
        <p className="Font-slim-15">¿Ya tienes una?<Link to={'/LogIn'} className="Font-slim-15">Inicia Sesión </Link></p>
      </hgroup>

      <form action="" className="form" onSubmit={handleSubmit} onInvalid={handleInvalid} >
        <div className= {`pages ${className[numPage]}`} >

          <PageForms numPage={1} inputs={[{name: "userName",label: "Nombre",type: "text"},
            {name: "uscalerLastName",label: "Apellido",type: "text"}
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
        <Button type={numPage < 4 ? 'button':'submit'} onClick={handleClick}>
          {
            numPage < 3 ? 'Siguiente': 'Registrarse'
          }
        </Button>
        
      </form>
    </div>
  );
}
