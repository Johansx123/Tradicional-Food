import { IndexMenu } from "../components/IndexMenu";
import { TitleMain } from "../components/TitleMain";
import { Menu1 } from "../components/Menu1";
import { Dinamic1 } from "../components/Dinamic1";
import { Menu2 } from "../components/Menu2";
import { Dinamic2 } from "../components/Dinamic2";
import { Bebidas } from "../components/Bebidas";

export function PageMenu() {
  return (
    <div className="background">
      <main id="top" className="wrapper-main">
        <TitleMain />
        <IndexMenu/>
        <section className="grid-wrapper">
          <Menu1 />
          <Dinamic1 />
          <Menu2 />
          <Dinamic2 />
          <Bebidas />
        </section>
      </main>
    </div>
  );
}