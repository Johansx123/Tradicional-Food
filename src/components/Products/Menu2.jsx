import { useState } from 'react';
import { BtnAdd } from '../atoms/BtnAdd';
import { OverlayEdit } from './OverlayEdit';
// eslint-disable-next-line react/prop-types
export function Menu2({title,children}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick =() => {
    setIsOpen(true)
  }
  return (
    <section id="perros" className="wrapper-menu2">

      <h2 className="title-menu1">{title}</h2>
      {children}
      <BtnAdd onClick={handleClick} />
      {isOpen ? <OverlayEdit setIsOpenOverlay={setIsOpen
      }/> : null}
    </section>
  );
}


