import { Link } from "react-router-dom";
import { Button } from "./atoms/Button";
import { InputForm } from "./atoms/InputForm";
import { Error } from "./utils/Error";
import { useState } from "react";

export function RegistererFrom() {
  const [error, setError] = useState()


const createUser =(data) =>{

 
  fetch('https://api.tradicionalfood.com/api/users/register',
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
    .then(response=>response.json())
    .then(message => {
      message.message == 'Usuario Registrado exitosamente'
      ? window.location.pathname = '/logIn'
      : setError(message.message)
    })
   
}


   function  handleSubmit (e) {
    e.preventDefault();
    setError()
    const fields = Object.fromEntries(new window.FormData(e.target));
    const name = fields?.nameUser;
    const email = fields?.emailUser;
    const phone = fields?.phoneUser;
    const password = fields?.passwordUser;
    const passwordValidate = fields?.passwordUserValidate;
    const data = {
      Email: email,
      Password: password,
      Name: name,
      Phone: phone
    };
    if (password == passwordValidate) {
       createUser(data);
    } else {
      setError('Tus contraseñas no coinciden')
      e.target.passwordUserValidate.classList.add('invalid');
      e.target.passwordUserValidate.value = '';
    }
  }


  function handleInvalid (e) {
    const inputs = e.target;
    inputs.classList.add('invalid');
    inputs.value = '';
  }



  return (
    <div className="wrapper-form">
      <hgroup className="hgroup-form">
        <h1 className="Title-30">Crea tu Cuenta</h1>
        <p className="Font-slim-15">¿Ya tienes una?<Link to={'/LogIn'} className="Font-slim-15">Inicia Sesión </Link></p>
      </hgroup>
      <Error error={error}/>
      <form action="" className="form" onSubmit={handleSubmit} onInvalid={handleInvalid} >

          <InputForm name={'nameUser'} type={'text'} label={'Nombre'}/>
          <InputForm name={'emailUser'} type={'email'} label={'Correo'}/>
          <InputForm name={'phoneUser'} type={'tel'} label={'Telefono'}/>
          <InputForm name={'passwordUser'} type={'password'} label={'Contraseña'}/>
          <InputForm name={'passwordUserValidate'} type={'password'} label={'Confirma tu Contraseña'}/>
        <Button type={'submit'} >Registrarse </Button>
      </form>
    </div>
  );
}