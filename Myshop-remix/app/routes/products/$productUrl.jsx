import React from 'react'

export async function loader({params}){
    const{ productUrl} = params
    
    console.log(productUrl)
    return{}

}

function Product() {
    return(
        <div>$productUrl</div>
    )
}
export default Product