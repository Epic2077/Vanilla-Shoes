import { baseUrl } from "./config";

export async function getProducts() {
  const response = await fetch(`${baseUrl}/products`);
  const products = await response.json();
  return products;
}
export async function getProductById(id) {
  console.log("Fetching product with ID:", id);
  try {
    const response = await fetch(`${baseUrl}/products`);
    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }

    const products = await response.json();

    // Find the product by id
    const product = products.find((p) => p.id === parseInt(id));
    if (!product) {
      console.error(`Product not found for ID: ${id}`);
      return null;
    }

    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
