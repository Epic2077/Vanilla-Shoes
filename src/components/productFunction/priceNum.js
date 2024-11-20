import { El } from "../../utils/create-element";
import productCard, { exportedProduct, exportedI } from "../productPage";

export default async function priceCalc() {
  await productCard();
  const product = exportedProduct;
  const i = exportedI;
  let totalPriceNum;
  totalPriceNum = product.price * i;
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
