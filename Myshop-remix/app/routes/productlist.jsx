import { useLoaderData} from '@remix-run/react'
import { useEffect } from 'react';
import React from 'react';
import { getProduct } from '~/models/productid.server'
const fs = require('fs-extra');

var id = 0;

export async function loader(){
    const id = await fs.readFile('./data.json')
        .then(data => JSON.parse(data))
        .then(json => json.product_id);
    
    const products = await getProduct(id);
    return products.data;
}

function Productlist(){

    const product = useLoaderData()
    //console.log(product.attributes)
    const { description, image, price, url, name } = product.attributes;
    return(
        <div>
            {name}
        </div>
    )
}
export default Productlist
