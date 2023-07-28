/* eslint-disable react/prop-types */
export function Product({ title, description, price }) {
  return (
    <div className="group-menu1">
      <div className="contentL">
        <h3>{title}</h3>
        <span className="description">
          {description}
        </span>
      </div>
      <span className="price price-menu1">{price}</span>
    </div>
  );
}
