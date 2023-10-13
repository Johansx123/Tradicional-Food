import { useEffect } from "react";
import { LogIn } from "../components/utils/LogIn";

export function PageLogIn() {
  useEffect(()=>{
    window.scrollTo(0,0)
  }
  ,
    [])
  return (
    <main className="background placeCenter">
      <LogIn />
    </main>
  );
}
