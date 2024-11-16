import { El } from "../utils/create-element";
import { getProductById } from "../api/product";
import { router } from "../routes/router";

export default function productCard(productId) {
  if (!productId) {
    console.error("Product ID is missing or invalid");
    return;
  }

  console.log(productId);

  if (![productId]) {
    console.error("Invalid product URL. Unable to extract product ID.");
    return;
  }

  const product = getProductById(productId);

  if (!product) {
    console.error(`Product not found for ID: ${productId}`);
    return;
  }

  document.title = product.title;

  const back = El({
    element: "img",
    src: "../src/assets/icons/back.svg",
    className: "cursor-pointer",
    eventListener: [
      {
        event: "click",
        callback: () => {
          router.navigate("/Home");
        },
      },
    ],
  });

  const brandPage = El({
    element: "section",
    children: [back],
    className: "px-[24px] py-[12px]",
  });
  document.body.innerHTML = "";
  document.body.appendChild(brandPage);
}
