import { useState } from 'react';
import { BtnAdd } from '../atoms/BtnAdd';
import { OverlayEdit } from './OverlayEdit';
// eslint-disable-next-line react/prop-types
export function Menu2({title,children,  allowEdit}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick =() => {
    setIsOpen(true)
  }
  return (
    <section id="perros" className="wrapper-menu2">

      <h2 className="title-menu1">{title}</h2>
      {children}
      {allowEdit ? <BtnAdd onClick={handleClick}/> : null}
      {isOpen ? <OverlayEdit setIsOpenOverlay={setIsOpen} type={'add'}/> : null}
    </section>
  );
}


