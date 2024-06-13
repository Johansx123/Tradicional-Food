import { Link, Navigate } from "react-router-dom";
import { InputForm } from "../atoms/InputForm";
import { Button } from "../atoms/Button";
import { useState } from "react";
import { Error } from "./Error";
import { useUserUpdate } from "../../providers/userContext";

export function LogIn() {
  const [error, setError] = useState();
  const [isLogged , setIsLogged] = useState(false)

  const updateUser = useUserUpdate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError()
    const fields = Object.fromEntries(new window.FormData(e.target));
    const email = fields?.userEmail;
    const password = fields?.userPassword;
    const data = {
      email,
      password,
    };
    fetch("/api/api/users/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      origin: "http://localhost:5173/Registerer",
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((message) => {
        message.Token
          ? correctLogin(message.Token)
          : setError(message.message);
      })
      .catch((e) => setError(e));
  };


const correctLogin = (Token) =>{
  setIsLogged(true)
  updateUser(Token)
}

  return (
    <div className="wrapper-form">
      {isLogged && <Navigate to={'/'} />}
      <hgroup className="hgroup-form">
        <h1 className="Title-30">Inicia Sesión</h1>
        <p className="Font-slim-15">
          ¿Es tu primera vez?
          <Link to={"/Registerer"} className="Font-slim-15">
            Registrate
          </Link>
        </p>
      </hgroup>

      <Error error={error} />

      <form className="form " onSubmit={handleSubmit}>
        <InputForm name={"userEmail"} label={"Correo"} type={"email"} />
        <InputForm name={"userPassword"} label={"Contraseña"} type={"password"}>
          <Link className="Font-slim-15">¿Olvidaste la contraseña?</Link>
        </InputForm>
        <Button>Iniciar Sesión</Button>

        <aside className="otherLogin">
          <p className="Font-slim-15">o ingresa con</p>
        </aside>
      </form>
    </div>
  );
}


