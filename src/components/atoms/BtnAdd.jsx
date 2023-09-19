import iconAdd from '../../../public/images/add.svg';

export function BtnAdd({onClick}) {

  return (
    <img onClick={onClick} src={iconAdd} style={{ cursor: 'pointer', width: '32px', margin: 'auto', zIndex : "10" }} alt="Agrgar producto" />
  );
}
