import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export function InputForm({ name, label, placeholder, type, children }) {
  const [value, setvalue] = useState( )
  
  const handleChange = (e) =>{
    const input = e.target
    input.className = 'fieldForm-input'
  }

  useEffect(()=>{
    
  },[])
  return (
    <div className="fieldForm">
      <label htmlFor={name} className="Font-small-15">{label}</label>
      <input className="fieldForm-input" onChange={handleChange} type={type} name={name} id={name} placeholder={placeholder} required/>
      {children
        ? children
        : null}
    </div>
  );
}
