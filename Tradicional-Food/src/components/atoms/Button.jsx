// eslint-disable-next-line react/prop-types
export function Button({ color = 'gray', type,onClick, children }) {
  return (
    <button className={`button-${color}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
