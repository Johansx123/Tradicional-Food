import iconDelete from "../../../public/delete.svg";

export default function BtnDelete({ onClick }) {
   return <img src={iconDelete} style={{ cursor: "pointer", width: '32px' }} alt="Eliminar " onClick={onClick} />;
}
