import PropTypes from 'prop-types';
import iconDelete from "../../../public/images/delete.svg";

export default function BtnDelete({ onClick, size = 32 }) {
   return <img src={iconDelete} style={{ cursor: "pointer", width: `${size}px`, height: `${size}px` }} alt="Eliminar " onClick={onClick} />;
}

BtnDelete.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
};