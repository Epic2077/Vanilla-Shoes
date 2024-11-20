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
  let quantity = document.getElementById("quantity").textContent;
  console.log(quantity);
  return quantity;
}

let user = getUser();
let productId = getId();
