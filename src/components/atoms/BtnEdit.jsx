import iconEdit from "../../../public/images/edit.svg";
import PropTypes from 'prop-types';

export function BtnEdit({ onClick, size = 32 }) {
  return <img src={iconEdit} style={{ cursor: "pointer", width: `${size}px`, height: `${size}px` }} onClick={onClick}
    alt="Editar" />;
}

BtnEdit.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number
};
