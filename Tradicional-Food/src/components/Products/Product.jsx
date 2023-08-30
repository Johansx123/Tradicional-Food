import { useState } from "react";
import iconEdit from "../../../public/edit.svg";
import iconDelete from "../../../public/delete.svg";
/* eslint-disable react/prop-types */
export function Product({ title, description, price }) {
  const [isEditable, setEditable] = useState(true);
  const [update, setUpdate] = useState();
  const [isVisible, setIsVisible] = useState('none')


  const handleChange = (e) => {
    setUpdate(e.target.value);
  };
  const hover = (e) =>{
    setIsVisible('flex')
  }
  const mouseLeave = () =>{
    setIsVisible('none')
  }

  return isEditable ? (
    <div className="group-menu1" style={{ position: "relative" }} onMouseEnter={hover} onMouseLeave={mouseLeave}>
      <span
        style={{
          display: isVisible,
          gap: "10px",
          justifyContent: "flex-end",
          alignItems: "center ",
          position: " absolute",
          top: "0",
          width: "100%",
          backgroundColor: "rgba(70, 70, 70, 0.78)",
          height: "100%",
        
        }}
      >
        <img src={iconEdit}  style={{cursor: 'pointer'}} onClick={()=>setEditable(false)} alt="" />
        <img src={iconDelete} style={{cursor: 'pointer'}}  alt="" />
      </span>
      <div className="contentL">
        <h3>{title}</h3>
        <span className="description">{description}</span>
      </div>
      <span className="price price-menu1">{price}</span>
    </div>
  ) : (
    <>
      <div className="group-menu1" style={{ position: "relative" }}>
        <div style={{ position: " absolute", top: "0" }}></div>
        <div className="contentL">
          <h3>
            {" "}
            <input type="text" defaultValue={title} onChange={handleChange} />
          </h3>
          <span className="description">

            <textarea
            type="text"
            className="description"
            defaultValue={description}
            onChange={{ handleChange }}
            >

            </textarea>
          </span>
        </div>
        <span className="price price-menu1">
          <input type="text" defaultValue={price} />
        </span>
      </div>
    </>
  );
}
