import productCard from "../productPage";
import { router } from "../../routes/router";
import { addToCart } from "../../api/users";

function getUser() {
  let user = localStorage.getItem("user");
  console.log(user);
  if (!user) {
    user = sessionStorage.getItem("user");
    if (!user) {
      router.navigate("/Login");
    }
    return user;
  } else {
    return user;
  }
}

export default async function getId(id) {
  console.log(await id);
  const productId = await id;
  return productId;
}

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

export async function getColor() {
  const colors = document.getElementsByClassName("active-color");

  // Check if any elements exist
  if (colors.length === 0) {
    console.log("No active color found default: white");
    return "white";
  } else {
    const color = colors[0];
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

let user = getUser();
let productId = getId();
let quantity = getQuantity();
let color = getColor();
let size = getSize();

export async function pushInfo() {
  addToCart(user, productId, quantity, color, size);
}
