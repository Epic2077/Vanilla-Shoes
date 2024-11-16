import { El } from "../utils/create-element";
import { getProductById } from "../api/product";
import { router } from "../routes/router";
import { layoutBack } from "../layout/layout";

export default async function productCard(productId) {
  if (!productId) {
    console.error("Product ID is missing or invalid");
    return;
  }

  console.log(productId);

  if (![productId]) {
    console.error("Invalid product URL. Unable to extract product ID.");
    return;
  }
  try {
    const product = await getProductById(productId);
    console.table(product);

    if (!product) {
      console.error(`Product not found for ID: ${productId}`);
      return;
    }

    document.title = product.title;

    const sold = El({
      element: "div",
    });
    const superDetail = El({
      element: "div",
      children: [],
      className: "flex mt-4 gap-[10px]",
    });
    const heart = El({
      element: "img",
      src: "../../src/assets/icons/heart.svg",
      className: "w-[35px]",
    });
    const title = El({
      element: "h1",
      children: product.title,
      className: "font-bold text-[32px] text-[#152536]",
    });
    const header = El({
      element: "div",
      children: [title, heart],
      className: "flex pr-[24px] justify-between mt-[24px]",
    });
    const detail = El({
      element: "section",
      children: [header, superDetail],
      className: "grid pl-[24px]",
    });

    const back = El({
      element: "img",
      src: "../../src/assets/icons/back.svg",
      className: "absolute ml-[24px] mt-[24px] cursor-pointer",
      eventListener: [
        {
          event: "click",
          callback: () => {
            router.navigate("/Home");
          },
        },
      ],
    });
    const img = El({
      element: "img",
      src: product.images,
      className: "h-[400px] w-screen",
    });
    const brandPage = El({
      element: "section",
      children: [back, img, detail],
      className: "",
    });
    document.body.innerHTML = "";
    document.body.appendChild(brandPage);
  } catch (error) {
    console.error("Failed to fetch product data:", error);
  }
}
