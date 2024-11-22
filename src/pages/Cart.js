import cartCard from "../components/cart-card/cart-card";
import { El } from "../utils/create-element";
export default function cartPage() {
  //   async function getCartCard() {
  //     return await cartCard();
  //   }
  const header = El({
    element: "div",
    children: [
      El({
        element: "img",
        src: "../../src/assets/image/logo.svg",
        alt: "logo",
        className: "w-[20px]",
      }),
      El({
        element: "h1",
        children: "My Cart",
        className: "text-[30px] font-bold text-black ml-[18px]",
      }),
      El({
        element: "img",
        src: "../../src/assets/image/search.svg",
        className: "w-[30px] ml-auto",
      }),
    ],
    className: "flex items-center",
  });

  const body = El({
    element: "div",
    children: [],
    className: "grid gap-4 mt-[30px]",
    id: "container",
  });
  cartCard().then((products) => {
    body.append(...products); // Populate the body with products
  });
  const page = El({
    element: "div",
    children: [header, body],
    className: "px-[32px] py-[24px]",
  });
  return page;
}
