import { IndexMenu } from "../components/IndexMenu";
import { TitleMain } from "../components/TitleMain";
import { Dinamic1 } from "../components/Dinamic1";
import { Dinamic2 } from "../components/Dinamic2";
import { Bebidas } from "../components/Bebidas";
import { TableMenu } from "../components/TableMenu";

export function PageMenu() {
  return (
    <div className="background">
      <main id="top" className="wrapper-main">
        <TitleMain />
        <IndexMenu/>
        <section className="grid-wrapper">
        <TableMenu />
          <Dinamic1 />
          <TableMenu version={'BLACK'}/>
          <Dinamic2 />
          <Bebidas />
        </section>
      </main>
    </div>
  );
}