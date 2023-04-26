export async function getProducts(){
    const response = await fetch('http://localhost:1337/api/products?populate=image');
    return await response.json();
}