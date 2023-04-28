import { Link } from '@remix-run/react'
import React from 'react';
// const fs = require('fs-extra');

function Product({ id, product }) {
  const { description, image, price, url, name } = product;

  // let fileString = '{"product_id": ' + id + '}'
  // fs.writeFileSync('./data1.json', fileString);

  return (
    <div className="product">
      <img src={image.data.attributes.formats.small.url} alt={`Image product ${name}`} />
      <div className="content">
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>

        <Link className="link" to={`/product/${id}`}>
          View Product
        </Link>
      </div>
    </div>
  );
}

export default Product;