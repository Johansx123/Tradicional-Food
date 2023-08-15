import { Link } from "react-router-dom";
import GoogleLogIn from "../atoms/google-login";
import { InputForm } from "../atoms/InputForm";
import { Button } from "../atoms/Button";

export function LogIn() {


  const handleSubmit = (e) =>{
    e.preventDefault()
    const fields = Object.fromEntries(new window.FormData(e.target))
    console.log(fields)
  }
  return (
    <div className="wrapper-form">
      <hgroup className="hgroup-form">
        <h1 className="Title-30">Inicia Sesión</h1>
        <p className="Font-slim-15">¿Es tu primera vez?<Link to={'/Registerer'} className="Font-slim-15">Registrate</Link></p>
      </hgroup>

      <form action="" className="form " onSubmit={handleSubmit} >
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
