import { useState } from "react";
import iconCheck from "../../public/images/check.svg";

export function MessageOverlay({ message }) {
  const [color, setColor] = useState('green');

  const classNameColor = message ? 'green' : 'red';

  return (
    <div className={`MessageOverlay ${color} `}>
      <img src={iconCheck} alt="" />
      <h4 className={`message ${color}`}>
        {message}
      </h4>
    </div>
  );
}
