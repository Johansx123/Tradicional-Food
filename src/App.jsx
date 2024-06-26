 import { PageLogIn } from "./Pages/PageLogIn";
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements,} from "react-router-dom";
import PageMenu from "./Pages/PageMenu";
import { Root } from "./Root";
import { PageRegisterer } from "./Pages/PageRegisterer";
import { UserProvider } from "./providers/UserProvider";
import Home from "./Pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/LogIn" element={<PageLogIn />} />
        <Route path="/Registerer" element={<PageRegisterer/>} />
      </Route>
    )
  );

 

  return  (
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  )
}

export default App;



