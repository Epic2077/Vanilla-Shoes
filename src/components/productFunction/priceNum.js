import { El } from "../../utils/create-element";
import productCard, { exportedProduct } from "../productPage";

export default async function priceCalc(i) {
  await productCard();
  const product = exportedProduct;

  let totalPriceNum;
  if (typeof i !== "number") {
    totalPriceNum = product.price;
  } else {
    totalPriceNum = product.price * i;
  }

  const priceNum = El({
    element: "h3",
    children: `$${totalPriceNum}.00`,
    className: "text-[32px] font-semibold",
    id: "total-price",
  });
  return priceNum;
}
