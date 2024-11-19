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
    let i = 1;

    const addToCartBtn = El({
      element: "div",
      children: [],
      className: "px-[10px] py-[5px]",
    });
    const priceNum = El({
      element: "h3",
      children: `$${product.price * i}.00`,
      className: "text-[32px] font-semibold",
    });
    const totalPrice = El({
      element: "p",
      children: "Total price",
      className: "text-[#152536a6] text-[14px]",
    });
    const price = El({
      element: "div",
      children: [totalPrice, priceNum],
      className: "grid",
    });
    const cart = El({
      element: "div",
      children: [price],
      className: "flex gap-[15px]",
    });

    //Quantity set

    function createQuantityBox() {
      const quantityValue = El({
        element: "p",
        children: i,
        className: "text-center",
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
                callback: () => {
                  if (i > 1) {
                    // Prevent negative values
                    i--;
                    quantityValue.textContent = i; // Update the DOM
                  }
                },
              },
            ],
          }),
          quantityValue, // Reference to the quantity display
          El({
            element: "p",
            children: "+",
            className: "cursor-pointer",
            eventListener: [
              {
                event: "click",
                callback: () => {
                  i++;
                  quantityValue.textContent = i; // Update the DOM
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

    const quantityTitle = El({
      element: "h3",
      children: "Quantity",
      className: "text-[24px] font-semibold",
    });

    const quantityBox = createQuantityBox();
    const quantity = El({
      element: "div",
      children: [quantityTitle, quantityBox],
      className: "flex gap-4 items-center mt-[24px]",
    });

    //Renders the sizes on the product page.
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
                console.log("size event working");
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

    //Renders the colors on the product page.
    function renderColors() {
      const colors = product.color;
      let selectedColor = colors[colors.length - 1];

      const colorElement = colors.map((color) => {
        const colorOption = El({
          element: "div",
          children: "",
          className: ` w-[40px] h-[40px] rounded-full bg-${color}-700`,
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

    const { colorElement, selectedColor } = renderColors();

    const { sizeElements, selectedSize } = renderSize();
    function noSize() {
      if (!selectedSize) {
        console.log("No size selected, using default:", selectedSize);
      }
    }
    function noColor() {
      if (!selectedColor) {
        console.log("No size selected, using default:", selectedColor);
      }
    }

    const colorBox = El({
      element: "div",
      children: colorElement,
      className: "flex gap-[10px] ",
    });
    const color = El({
      element: "div",
      children: [
        El({
          element: "p",
          children: "Colors",
          className: "text-[24px] font-semibold",
        }),
        colorBox,
      ],
      className: "grid gap-[15px]",
    });

    const sizeBox = El({
      element: "div",
      children: sizeElements,
      className: "flex gap-[10px]",
    });

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
      children: [size, color],
      className: "flex mt-[10px] gap-[40px]",
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
      className: "my-5 mr-4",
    });
    const hr2 = El({
      element: "hr",
      className: "my-3 mr-4",
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
      children: [
        header,
        superDetail,
        hr,
        description,
        options,
        quantity,
        hr2,
        cart,
      ],
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
      className: "h-[380px] w-screen",
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
