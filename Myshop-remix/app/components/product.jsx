import { Link } from '@remix-run/react'

function Product({ product }) {
  const { description, image, price, url, name } = product;

  return (
    <div className="product">
      <img src={image.data.attributes.formats.small.url} alt={`Image product ${name}`} />
      <div className="content">
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>

        <Link className="link" to={`/products/${url}`}>
          View Product
        </Link>
      </div>
    </div>
  );
}

export default Product;