import { Header } from "./components/Header";
import { ScrollTop } from "./components/ScrollTop";
import { Footer } from "./components/Footer";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import PageMenu from "./Pages/PageMenu";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>	}>
        <Route index element={<PageMenu/>}/>
        <Route path="LogIn" element={<h1>Hola mundo</h1>}/>
      </Route>
    )
  )
      
  return (
    
    <RouterProvider router={router}/>
    
  );
}

export default App;

const Root = ()=>{
  return(
    <>
    <Header/>
    <ScrollTop/>
    <Outlet/>
    <Footer/>
    </>
  )
}
