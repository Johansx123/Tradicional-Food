import iconEdit from "../../../public/images/edit.svg";
import iconCancel from "../../../public/images/cancel.svg";
import { useIsEditContext, useIsEditToggleContext } from "../../providers/userContext";

export function Options() {

  const allowEdit = useIsEditContext()
  const setAllowEdit = useIsEditToggleContext()

  const handleClick = () => {
    setAllowEdit(!allowEdit);
  };

  return (
    <aside className="optionsEdit">
      {allowEdit ? (
          <img src={iconCancel} alt="Cancelar" style={{ cursor: "pointer" }} onClick={handleClick} /> 
      ) : (
        <img src={iconEdit} alt="Editar" style={{ cursor: "pointer" }} onClick={handleClick} />
      )}
    </aside>
  );
}
