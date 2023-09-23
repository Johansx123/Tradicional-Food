import { useRef } from "react";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export function InputForm({ name, label, placeholder, type , pattern, children ,defaultValue}) {
  const [value, setValue] = useState(defaultValue)
  const inputRef = useRef()

  const handleChange = (e) =>{
    const input = e.target
    input.className = 'fieldForm-input'
    setValue(e.target.value)
  }

 

  return (
    <div className="fieldForm">
      <label htmlFor={name} className="Font-small-15">{label}</label>
      <input className="fieldForm-input" value={value} onChange={handleChange} type={type} name={name} id={name}  ref={inputRef}  pattern ={pattern} required/>
      {children
        ? children
        : null}
    </div>
  );
}
