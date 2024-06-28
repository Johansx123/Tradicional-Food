 import { PageLogIn } from "./Pages/PageLogIn";
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements,} from "react-router-dom";
import { Root } from "./Root";
import { PageRegisterer } from "./Pages/PageRegisterer";
import { UserProvider } from "./providers/UserProvider";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import AxiosInterceptor from "./interceptors/axios.interceptor";

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
  
  
  
  return (
    <Provider store={store}>
      <UserProvider>
        <AxiosInterceptor/>
        <RouterProvider router={router} />
      </UserProvider>
    </Provider>
  );
}

export default App;



