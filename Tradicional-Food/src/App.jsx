import { PageLogIn } from "./Pages/PageLogIn";
import {Link, Route,RouterProvider,createBrowserRouter,createRoutesFromElements,} from "react-router-dom";
import PageMenu from "./Pages/PageMenu";
import { Root } from "./Root";
import { InputForm } from "./components/atoms/InputForm";
import GoogleLogIn from "./components/atoms/google-login";
import { Button } from "./components/atoms/Button";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<PageMenu />} />
        <Route path="LogIn" element={<PageLogIn />} />
        <Route path="Registerer" element={<PageRegisterer/>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;


function PageRegisterer() {
  return (
    <main className="background placeCenter">
      <RegistererFrom/>
    </main>
  );
}

function RegistererFrom () {
  return(
    <div className="wrapper-form">
      <hgroup className="hgroup-form">
        <h1 className="Title-30">Crea tu Cuenta</h1>
        <p className="Font-slim-15">¿Ya tienes una?<Link to={'/LogIn'} className="Font-slim-15">Inicia Sesión </Link></p>
      </hgroup>

      <form action="" className="form">
        <section className="page">
          <InputForm
            name={"userName"}
            label={"Nombre"}
            type={"text"} />
          <InputForm
            name={"userLastName"}
            label={"Apellido"}
            type={"text"}
          />
          <div className="form-stepsLine">
            <div className="form-stepsLine-step"></div>
          </div>
          <Button >
            Siguiente
          </Button>
        </section>
      </form>
    </div>
  )
}
