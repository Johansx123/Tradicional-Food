import iconEdit from "../../../public/images/edit.svg";
import iconCancel from "../../../public/images/cancel.svg";
import '../../styles/switch.css'
import { useIsEditContext, useIsEditToggleContext } from "../../providers/userContext";

export function Switch() {

  const allowEdit = useIsEditContext()
  const setAllowEdit = useIsEditToggleContext()

  const handleClick = () => {
    setAllowEdit(!allowEdit);
  };

  return (
    
      <span className="optionsEdit">
        <label htmlFor="chkSwitch" onClick={handleClick}></label>
        <input type="checkbox" id="chkSwitch"/>
        <img className="icon edit" src={iconEdit} alt="Editar"/>
        <img className="icon cancel" src={iconCancel} alt="Cancelar" /> 
      </span>
  );
}

