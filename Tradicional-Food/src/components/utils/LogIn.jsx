import { Link, json } from "react-router-dom";
import GoogleLogIn from "../atoms/google-login";
import { InputForm } from "../atoms/InputForm";
import { Button } from "../atoms/Button";
import { useState } from "react";

export function LogIn() {
  const [error, setError] = useState()

  const handleSubmit = (e) =>{
    e.preventDefault()
    const fields = Object.fromEntries(new window.FormData(e.target))
    const email = fields?.userEmail
    const password = fields?.userPassword
    const data = {
      email,
      password
    }
    fetch('https://api.tradicionalfood.com/api/users/login',{
      method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    origin: "http://localhost:5173/Registerer",
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
      body: JSON.stringify(data)
    } )
    .then(response => response.json())
    .then(message => {window.localStorage.setItem( 'loggedTradicionalFoodUser' , JSON.stringify(message))
    window.location.pathname = "/"
  })
    .catch(e => setError(e))
  }

  return (
    <div className="wrapper-form">
      <hgroup className="hgroup-form">
        <h1 className="Title-30">Inicia Sesión</h1>
        <p className="Font-slim-15">¿Es tu primera vez?<Link to={'/Registerer'} className="Font-slim-15">Registrate</Link></p>
      </hgroup>

        {
          error ?
          <h2>{error}</h2>
          :<></>
        }        

      <form className="form " onSubmit={handleSubmit} >
          <InputForm
            name={"userEmail"}
            label={"Correo"}
            type={"email"} />
          <InputForm
            name={"userPassword"}
            label={"Contraseña"}
            type={"password"}
          >
            <Link className="Font-slim-15">¿Olvidaste la contraseña?</Link>
          </InputForm>
          <Button>
            Iniciar Sesión
          </Button>

          <aside className="otherLogin">
            <p className="Font-slim-15">o ingresa con</p>
            <GoogleLogIn />
          </aside>
      </form>
    </div>
  );
}
