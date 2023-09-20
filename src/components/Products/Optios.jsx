import iconEdit from "../../../public/edit.svg";
import iconCancel from "../../../public/cancel.svg";

export function Optios({ allowEdit, setAllowEdit }) {
  const handleClick = () => {
    setAllowEdit(!allowEdit);
  };

  return (
    <aside className="optionsEdit">
      {allowEdit ? (
        <>
          <img
            src={iconCancel}
            alt="Cancelar"
            style={{ cursor: "pointer" }}
            onClick={handleClick} />
        </>
      ) : (
        <img
          src={iconEdit}
          alt="Editar"
          style={{ cursor: "pointer" }}
          onClick={handleClick} />
      )}
    </aside>
  );
}
