import { El } from "../../utils/create-element";
import productCard, { exportedProduct } from "../productPage";

export default async function priceCalc(i) {
  await productCard();
  const product = exportedProduct;
  console.log(i);
  let totalPriceNum;
  if (typeof i !== "number") {
    totalPriceNum = product.price;
  } else {
    totalPriceNum = product.price * i;
  }
  console.log(parseInt(i));
  console.log(totalPriceNum);
  const priceNum = El({
    element: "h3",
    children: `$${totalPriceNum}.00`,
    className: "text-[32px] font-semibold",
    id: "total-price",
  });
  return priceNum;
}
// function updateTotalPrice(priceNumElement) {
//   totalPrice = product.price * i;
//   priceNumElement.textContent = `$${totalPrice}.00`;
// }
