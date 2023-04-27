import { useLoaderData} from '@remix-run/react'
import { getProducts } from '~/models/products.server'
import Product from '~/components/product'
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

export async function loader(){
    const products = await getProducts()
    return products.data
}

function Shop(){
    const products = useLoaderData()
    console.log()
    return(
        <main className='container'>
            <h2 className='heading'> &#123;Our Products&#125;</h2>
            {products?.length && (
                <div className='products-grid'>
                    {products.map(product =>(
                        <Product 
                            key={product?.id}
                            id={product?.id}
                            product={product?.attributes}
                        />
                      
                    ))}
                </div>
            )}
        </main>
    )
}
export default Shop