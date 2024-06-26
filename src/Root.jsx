import { Header } from "./components/Header";
import { ScrollTop } from "./components/ScrollTop";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
import { MessageOverlay } from "./components/MessageOverlay";
import { useSelector } from "react-redux";



export function Root() {
  const message = useSelector(store => store.message)

  return (
    <>
      <Header />
      <ScrollTop />
      {message.message && <MessageOverlay message={message.message} type={message.type} />}
      <Outlet />
      <Footer />
    </>
  );
}
