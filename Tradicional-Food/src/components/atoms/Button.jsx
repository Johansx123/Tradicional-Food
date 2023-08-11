// eslint-disable-next-line react/prop-types
export function Button({ color = 'gray', children }) {
  return (
    <button className={`button-${color}`} type="submmit">
      {children}
    </button>
  );
}
