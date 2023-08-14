 import { PageLogIn } from "./Pages/PageLogIn";
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements,} from "react-router-dom";
import PageMenu from "./Pages/PageMenu";
import { Root } from "./Root";
import { PageRegisterer } from "./components/PageRegisterer";

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



