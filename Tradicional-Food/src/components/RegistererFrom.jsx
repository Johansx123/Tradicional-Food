import { Link } from "react-router-dom";
import { Button } from "./atoms/Button";
import { PageForms } from "./PageForms";
import {  useState } from "react";
import { StepsLineForm } from "./atoms/StepsLineForm";

export function RegistererFrom() {
const[numPage,setNumPage] = useState(1)


const createUser = async (data) =>{
  const res = await fetch('https://api.tradicionalfood.com/api/users/register',
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
    });
  const data_1 = await res.json();
  return console.log(data_1);
   
}

const handleClick = () =>{
  setNumPage(numPage + 1)
}
const handleSubmit = (e) =>{
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
    Phone: phone,
    Name : name
  }
  password == passwordValidate && numPage == 3
  ? createUser(data)
  : console.log('eerror')
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
             
         <FormSteps numPage={numPage} />
        </div>
        <StepsLineForm step={numPage}/>
        <Button type={'submit'} onClick={handleClick}>
          {
            numPage < 3 ? 'Siguiente': 'Registrarse'
          }
        </Button>
        
         {/* <InputForm name={'nameUser'} type={'text'} label={'Nombre'}/>
         <InputForm name={'emailUser'} type={'email'} label={'Correo'}/>
         <InputForm name={'phoneUser'} type={'tel'} label={'Telefono'}/>
         <InputForm name={'passwordUser'} type={'password'} label={'Contraseña'}/>
         <InputForm name={'passwordUserValidate'} type={'password'} label={'Confirma tu Contraseña'}/>

         <Button type={'submit'} onClick={handleClick}>
          {
            'Registrarse'
          }
        </Button> */}
      </form>
    </div>
  );
}



  
const FormSteps  =({numPage}) =>{
  switch (numPage) {
    case 1:
      return(
      <PageForms numPage={1} inputs={[{name: "userName",label: "Nombre",type: "text"},
      {name: "userLastName",label: "Apellido",type: "text"}
    ]} />)
    
    case 2:
      return(
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
      ]} />)
      case 3:
        return(
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
        ]} />)
    default:
      
      <PageForms numPage={1} inputs={[{name: "userName",label: "Nombre",type: "text"},
      {name: "uscalerLastName",label: "Apellido",type: "text"}
    ]} />
      break;
  }
}