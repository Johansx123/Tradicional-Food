import { useRef } from "react";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export function InputForm({ name, label, placeholder, type , pattern, children ,defaultValue}) {
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
      <input className="fieldForm-input"defaultValue={defaultValue} onChange={handleChange} type={type} name={name} id={name} placeholder={placeholder} ref={inputRef} value={value} pattern ={pattern} required/>
      {children
        ? children
        : null}
    </div>
  );
}
