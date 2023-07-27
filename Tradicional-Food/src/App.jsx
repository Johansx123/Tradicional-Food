import { Header } from "./components/Header";
import { ScrollTop } from "./components/ScrollTop";
import { Footer } from "./components/Footer";
import { PageMenu } from "./Pages/PageMenu";

function App() {
  return (
    <>
      <div className="background">
        <Header></Header>
        <ScrollTop />
        <PageMenu/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
