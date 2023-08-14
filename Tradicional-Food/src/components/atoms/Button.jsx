// eslint-disable-next-line react/prop-types
export function Button({ color = 'gray', type, children }) {
  return (
    <button className={`button-${color}`} type={type}>
      {children}
    </button>
  );
}
