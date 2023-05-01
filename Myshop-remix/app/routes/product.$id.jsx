import { useLoaderData} from '@remix-run/react'
import { useEffect } from 'react';
import React from 'react';
import { getProduct } from '~/models/productid.server'
// const fs = require('fs-extra');

import styles from '~/styles/product.css'

export function meta(){
    return[{
        title: 'RevTech - Shop',
        description: 'Our products'
        }
    ]
}

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export async function loader({ params }){    
    const { id } = params;
    const products = await getProduct(id);
    return products.data;
}

function Productlist(){

    const product = useLoaderData()
    const { description, image, price, url, name } = product.attributes;
    return(
        <div className="product">
      <img src={image.data.attributes.formats.small.url} alt={`Image product ${name}`} />
      <div className="content">
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>

      </div>
    </div>
    )
}
export default Productlist
