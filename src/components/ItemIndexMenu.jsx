export function ItemIndexMenu({ img, href, alt }) {
  return (
    <a href={href} className="item-index">
      <img src={img} alt={alt} />
    </a>
  );
}
