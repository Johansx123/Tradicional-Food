import { Link } from "react-router-dom";
import { InputForm } from "../atoms/InputForm";
import { Button } from "../atoms/Button";
import { loginUser } from "../../js/User";
import {  useUserUpdate } from "../../providers/userContext";


export function LogIn() {
  
  
  const updateUser = useUserUpdate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const fields = Object.fromEntries(new window.FormData(e.target));
    const email = fields?.userEmail;
    const password = fields?.userPassword;
    const data = {
      email,
      password,
    };

    const response = await loginUser(data)
    if(response.Token){ 
      updateUser(response.Token)
      window.location.href = '/'
    }
   
    
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

      {/* <Error error={error} /> */}

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


