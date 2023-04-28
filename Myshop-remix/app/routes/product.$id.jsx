import { useLoaderData} from '@remix-run/react'

import React from 'react';
import { getProduct } from '~/models/productid.server'
import styles from '~/styles/product.css'


// const fs = require('fs-extra');

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

//var id = 1;

export async function loader({params}){    
    const { id } = params;
    const products = await getProduct(id);

    if(!products.data){
        throw new Response ('Product not found',{
            status: 404,
            statusText: 'Product not found',
            title: 'RevTech - Product not Found'
        })
        
    }

    return products.data;
}

/*
export function meta({data}) {
    
    if(!data){
        return {
            title: 'RevTech - Product not Found'
        }
    }
    
  }
  */
  


function Productlist(){

    const product = useLoaderData();

    const { description, image, price, url, name } = product.attributes;
    return(
        <main className="product container">
            <img className = "image" src={image.data.attributes.formats.small.url} alt={`Image product ${name}`} />
                <div className="content">
                <h3 className="title">&#123;{name}&#125;</h3>
                <p className="text">{description}</p>
                <p className="price">${price}</p>
      </div>
    </main>
    )
}
export default Productlist
