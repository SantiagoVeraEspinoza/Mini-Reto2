export async function getProduct(productId){
    const response = await fetch(`http://localhost:1337/api/products/${productId}?populate=image`);
    return await response.json();
}
