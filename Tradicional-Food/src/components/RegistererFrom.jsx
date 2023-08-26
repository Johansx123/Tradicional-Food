import { Link } from "react-router-dom";
import { Button } from "./atoms/Button";
import {  useState } from "react";
import { StepsLineForm } from "./atoms/StepsLineForm";
import { InputForm } from "./atoms/InputForm";

export function RegistererFrom() {
const[numPage,setNumPage] = useState(1)


const createUser =  (data) =>{
  return fetch('https://api.tradicionalfood.com/api/users/register',
    {
      method: "POST",
      mode: "cors",
      origin: "http://localhost:5173/Registerer",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then( message => message.json())
    .then (message => console.log(message))

   
}

const handleClick = () =>{
  setNumPage(numPage + 1)
}
const handleSubmit = async (e) =>{
  e.preventDefault()
  const fields = Object.fromEntries(new window.FormData(e.target))
  const name = fields?.nameUser
  const email = fields?.emailUser
  const phone = fields?.phoneUser
  const password = fields?.passwordUser
  const passwordValidate = fields?.passwordUserValidate
  const data =  {
    Email: email,
    Password: password,
    Name : name,
    Phone: phone
  }

  const message = createUser(data)
  console.log(message)

  // res.status = 201 ? window.location.href = '/Login':null
  }


const handleInvalid = (e) =>{
  const inputs = e.target
  
  inputs.classList.add('invalid')
  inputs.value = ''
}



  return (
    <div className="wrapper-form">
      <hgroup className="hgroup-form">
        <h1 className="Title-30">Crea tu Cuenta</h1>
        <p className="Font-slim-15">¿Ya tienes una?<Link to={'/LogIn'} className="Font-slim-15">Inicia Sesión </Link></p>
      </hgroup>

      <form action="" className="form" onSubmit={handleSubmit} onInvalid={handleInvalid} >
        <div className= {`pages `} >
             
         {/* <FormSteps numPage={numPage} /> */}
        </div>
          <InputForm name={'nameUser'} type={'text'} label={'Nombre'}/>
          <InputForm name={'emailUser'} type={'email'} label={'Correo'}/>
          <InputForm name={'phoneUser'} type={'tel'} label={'Telefono'}/>
          <InputForm name={'passwordUser'} type={'password'} label={'Contraseña'}/>
          <InputForm name={'passwordUserValidate'} type={'password'} label={'Confirma tu Contraseña'}/>
        <StepsLineForm step={numPage}/>
        <Button type={'submit'} onClick={handleClick}>
          {
            numPage < 3 ? 'Siguiente': 'Registrarse'
          }
        </Button>
        

      </form>
    </div>
  );
}

function RegisterMessage ({message,res}){

  const className = 1;

  return(
    <div className="registerOK">
        <h2>hola</h2>
    </div>
  );
  }