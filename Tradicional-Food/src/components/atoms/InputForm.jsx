
// eslint-disable-next-line react/prop-types
export function InputForm({ name, label, placeholder, type, children }) {
  return (
    <div className="fieldForm">
      <label htmlFor={name} className="Font-small-15">{label}</label>
      <input className="fieldForm-input" type={type} name={name} id={name} placeholder={placeholder} required/>
      {children
        ? children
        : null}
    </div>
  );
}
