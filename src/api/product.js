import { baseUrl } from "./config";

export async function getProducts() {
  const response = await fetch(`${baseUrl}/Products`);
  const products = await response.json();
  return products;
}
export async function getProductById(id) {
  const response = await fetch(`${baseUrl}/Products/${id}`);
  const product = await response.json();
  return product;
}
