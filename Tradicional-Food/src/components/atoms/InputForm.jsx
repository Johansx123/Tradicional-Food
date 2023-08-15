import { useRef } from "react";
import { useEffect, useMemo, useState } from "react";

// eslint-disable-next-line react/prop-types
export function InputForm({ name, label, placeholder, type, children }) {
  const [value, setValue] = useState('')
  const inputRef = useRef()
  const handleChange = (e) =>{
    const input = e.target
    input.className = 'fieldForm-input'
    setValue(e.target.value)
  }
useEffect(()=>{
  inputRef.current.value =''
},[])

  return (
    <div className="fieldForm">
      <label htmlFor={name} className="Font-small-15">{label}</label>
      <input className="fieldForm-input" onChange={handleChange} type={type} name={name} id={name} placeholder={placeholder} ref={inputRef} value={value} required/>
      {children
        ? children
        : null}
    </div>
  );
}
