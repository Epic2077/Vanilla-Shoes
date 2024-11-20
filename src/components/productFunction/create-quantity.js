import { El } from "../../utils/create-element";
import productCard, { exportedProduct } from "../productPage";
import priceCalc from "./priceNum";
import { getQuantity } from "./sendData";

export default async function quantityFunc() {
  let i = 1;

  await productCard();
  const product = exportedProduct;

  const quantityValue = El({
    element: "p",
    children: i,
    className: "text-center",
    id: "quantity",
  });

  const quantityBox = El({
    element: "div",
    children: [
      El({
        element: "p",
        children: "-",
        className: "cursor-pointer",
        eventListener: [
          {
            event: "click",
            callback: async () => {
              if (i > 1) {
                i--;
                quantityValue.textContent = i;
                const updatedPrice = await priceCalc(i);
                document
                  .getElementById("total-price")
                  .replaceWith(updatedPrice);
              }
            },
          },
        ],
      }),
      quantityValue,
      El({
        element: "p",
        children: "+",
        className: "cursor-pointer",
        eventListener: [
          {
            event: "click",
            callback: async () => {
              i++;
              quantityValue.textContent = i;
              const updatedPrice = await priceCalc(i);
              document.getElementById("total-price").replaceWith(updatedPrice);
            },
          },
        ],
      }),
    ],
    className:
      "px-[30px] py-[10px] flex gap-[30px] bg-slate-200 text-[24px] font-semibold rounded-3xl",
  });

  return quantityBox;
}
