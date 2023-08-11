import { Header } from "./components/Header";
import { ScrollTop } from "./components/ScrollTop";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <>
      <Header />
      <ScrollTop />
      <Outlet />
      <Footer />
    </>
  );
}
