import { El } from "../../utils/create-element";
import productCard, { exportedProduct } from "../productPage";

export default async function renderColors() {
  await productCard();
  const product = exportedProduct;
  console.table(product);
  const colors = product.color;
  let selectedColor = colors[colors.length - 1];

  const colorElement = colors.map((color) => {
    const colorOption = El({
      element: "div",
      children: "",
      className: ` w-[40px] h-[40px] rounded-full bg-${color}-700`,
      id: color,
      eventListener: [
        {
          event: "click",
          callback: () => {
            console.log("color event working");
            colorElement.forEach((cl) =>
              cl.classList.remove("border-[2px]", "border-black")
            );

            event.target.classList.add("border-[2px]", "border-black");
            selectedColor = color;
          },
        },
      ],
    });
    return colorOption;
  });
  return { colorElement, selectedColor };
}
