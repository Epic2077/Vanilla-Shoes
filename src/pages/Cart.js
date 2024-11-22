import cartCard from "../components/cart-card/cart-card";
import { footer } from "../layout/footer/footer";
import { layout } from "../layout/layout";
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
    className: " mt-[30px] min-h-screen",
    id: "container",
  });
  cartCard().then((products) => {
    body.append(...products); // Populate the body with products
  });
  const layouts = layout();
  const page = El({
    element: "div",
    children: [header, body, layouts],
    className: "px-[32px] py-[24px] bg-slate-100 min-h-screen",
  });
  return page;
}
