import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const FieldSelect = ({ name, options, defaultValue }) => {


  const [value, setValue] = useState();

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    options && options.find((e) => {
      if (e.categoty_name == defaultValue) {
        setValue(e.category_id);
      }
    });
  }, [defaultValue, options]);

  return (
    <div className="fieldForm">
      <label className='Font-small-15' htmlFor={name}>Categoria</label>
      <select id={name}  value={value} onChange={(e) => {setValue(e.target.value); }} className=" fieldForm-input" name="category" id="category">
        <option value="-1">Seleccione una Categoria</option>
        {options
          // eslint-disable-next-line react/prop-types
          && options.map(e => {
            return <option value={e.category_id} key={e.category_id}>{e.categoty_name}</option>;
          })
          }
      </select>
    </div>
  );
};

