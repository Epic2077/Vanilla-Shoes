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

    function renderSize() {
      const size = product.size; // Assuming `product.size` is an array of sizes
      let selectedSize = size[size.length - 1]; // Default to the last size

      const sizeElements = size.map((num) => {
        const sizeOption = El({
          element: "div",
          children: num,
          className:
            " border-[2px] border-slate-500 text-[18px] text-[#152536a6] rounded-full w-[40px] h-[40px] grid justify-center items-center cursor-pointer",
          eventListener: [
            {
              event: "click",
              callback: () => {
                console.log(" event working");
                // Deselect all sizes
                sizeElements.forEach((el) =>
                  el.classList.remove("bg-black", "text-white")
                );

                // Highlight the selected size
                sizeOption.classList.add("bg-black", "text-white");
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

    const { sizeElements, selectedSize } = renderSize();
    const sizeBox = El({
      element: "div",
      children: sizeElements,
      className: "flex gap-[10px]",
    });
    function noSize() {
      if (!selectedSize) {
        console.log("No size selected, using default:", selectedSize);
      }
    }
    const size = El({
      element: "div",
      children: [
        El({
          element: "h3",
          children: "Size",
          className: "text-[24px] font-semibold",
        }),
        sizeBox,
      ],
      className: "grid gap-[15px]",
    });
    const options = El({
      element: "div",
      children: [size],
      className: "flex mt-[10px]",
    });
    const span = El({
      element: "span",
      children: "view more..",
      className: "text-[#152536] font-semibold",
    });
    const descriptionText = El({
      element: "p",
      children: [
        `Lorem ipsum dolor sit amet, consectrtur adipiscing elit, sed do ejusmod tempor incididunt ut labore et `,
        span,
      ],
      className: "text-[#152536a6] text-[15px]",
    });
    const descriptionTitle = El({
      element: "h3",
      children: "Description",
      className: "text-[24px] font-semibold",
    });
    const description = El({
      element: "div",
      children: [descriptionTitle, descriptionText],
      className: "grid gap-[10px] ",
    });
    const hr = El({
      element: "hr",
      className: "my-5",
    });
    const reviews = El({
      element: "p",
      children: "0 (No reviews)",
      className: "text-[16px] text-[#152536]",
    });
    const star = El({
      element: "img",
      src: "../../src/assets/icons/star.svg",
      className: "w-[25px]",
    });
    const rating = El({
      element: "div",
      children: [star, reviews],
      className: "flex gap-4 ml-4 items-center",
    });
    const sold = El({
      element: "div",
      children: `${product.order} sold`,
      className: "bg-slate-200 px-[10px] py-[5px] rounded-[5px]",
    });
    const superDetail = El({
      element: "div",
      children: [sold, rating],
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
      children: [header, superDetail, hr, description, options],
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
