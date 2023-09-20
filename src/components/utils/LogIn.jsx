import { Link } from "react-router-dom";
import GoogleLogIn from "../atoms/google-login";
import { InputForm } from "../atoms/InputForm";
import { Button } from "../atoms/Button";
import { useState } from "react";
import { setToken } from "../../js/Token";
import { Error } from "./Error";
import { correctLogin } from "./correctLogin";

export function LogIn() {
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError();
    const fields = Object.fromEntries(new window.FormData(e.target));
    const email = fields?.userEmail;
    const password = fields?.userPassword;
    const data = {
      email,
      password,
    };

    fetch("https://api.tradicionalfood.com/api/users/login", {
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
          ? correctLogin(message.Token, setToken)
          : setError(message.message);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="wrapper-form">
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
          <GoogleLogIn/>
        </aside>
      </form>
    </div>
  );
}


