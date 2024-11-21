import { El } from "../../utils/create-element";
import productCard, { exportedProduct } from "../productPage";

export default async function renderSizes() {
  await productCard();
  const product = exportedProduct;
  const size = product.size; // Assuming `product.size` is an array of sizes
  let selectedSize = size[size.length - 1]; // Default to the last size

  const sizeElements = size.map((num) => {
    const sizeOption = El({
      element: "div",
      children: num,
      className:
        " border-[2px] border-slate-500 text-[18px] text-[#152536a6] rounded-full w-[40px] h-[40px] grid justify-center items-center cursor-pointer",
      id: num,
      eventListener: [
        {
          event: "click",
          callback: () => {
            console.log("size event working");
            // Deselect all sizes
            sizeElements.forEach((el) =>
              el.classList.remove("bg-black", "text-white", "active-size")
            );

            // Highlight the selected size
            sizeOption.classList.add("bg-black", "text-white", "active-size");
            sizeOption.classList.remove("text-[#152536a6]");
            selectedSize = num;
          },
        },
      ],
    });
    return sizeOption;
  });

  return { sizeElements, selectedSize };
}
