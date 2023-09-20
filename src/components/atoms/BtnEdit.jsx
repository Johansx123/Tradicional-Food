import iconEdit from "../../../public/edit.svg";

export function BtnEdit({ onClick }) {
  return <img src={iconEdit} style={{ cursor: "pointer", width: '32px' }} onClick={onClick}
    alt="Editar" />;
}
