import { Link } from "react-router-dom";
import { Button } from "./atoms/Button";
import { InputForm } from "./atoms/InputForm";

export function RegistererFrom() {


const createUser =  async (data) =>{
  const statusCrated = 201

  const message = await fetch('https://api.tradicionalfood.com/api/users/register',
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
  const response = await message.json();
  alert(response.message)
  console.log(message.status == statusCrated)
  message.status == statusCrated ?  window.location.pathname = '/Login'   : null

}


  async function  handleSubmit (e) {
    e.preventDefault();
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
      <form action="" className="form" onSubmit={handleSubmit} onInvalid={handleInvalid} >

          <InputForm name={'nameUser'} type={'text'} label={'Nombre'}/>
          <InputForm name={'emailUser'} type={'email'} label={'Correo'}/>
          <InputForm name={'phoneUser'} type={'tel'} label={'Telefono'} pattern={"^[3][0-9]{9}"}/>
          <InputForm name={'passwordUser'} type={'password'} label={'Contraseña'}/>
          <InputForm name={'passwordUserValidate'} type={'password'} label={'Confirma tu Contraseña'}/>
        <Button type={'submit'} >Registrarse </Button>
      </form>
    </div>
  );
}