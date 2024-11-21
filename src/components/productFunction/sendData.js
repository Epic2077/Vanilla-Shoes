import { router } from "../../routes/router";
import { addToCart } from "../../api/users";

export async function getQuantity() {
  let quantity = await document.getElementById("quantity").textContent;
  console.log(quantity);
  return quantity;
}

export async function getCost() {
  let price = await document.getElementById("total-price").textContent;
  console.log(price);
  return price;
}

export function getColor() {
  debugger;
  const color = document.querySelector(".active-color");

  // Check if any elements exist
  if (!color) {
    console.log("No active color found default: white");
    return "white";
  } else {
    console.log(`Selected color: ${color.id}`);
    let finalColor = color.id;
    return finalColor;
  }
}

export async function getSize() {
  const sizes = document.getElementsByClassName("active-size");

  if (sizes.length === 0) {
    console.log("No active size found default: Null");
    return null;
  } else {
    const size = sizes[0];
    console.log(`Selected size: ${size.textContent}`);
    return size.textContent;
  }
}

export async function pushInfo() {
  addToCart(user, productId, quantity, color, size);
}
