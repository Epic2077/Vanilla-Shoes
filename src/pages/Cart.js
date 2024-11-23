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
    className: "flex items-center px-[32px] py-[24px]",
  });

  const body = El({
    element: "div",
    children: [],
    className: "mt-[30px] min-h-screen px-[32px] ",
    id: "container",
  });
  cartCard().then((products) => {
    body.append(...products); // Populate the body with products
  });

  const checkout = El({
    element: "div",
    children: [
      El({
        element: "div",
        children: [
          El({
            element: "p",
            children: "Total Price",
            className: "text-gray-400 text-[15px]",
          }),
          El({
            element: "h3",
            children: [],
            className: "text-[24px] font-semibold",
            id: "totalPrice",
          }),
        ],
        className: "grid gap-[2px] px-[32px] ",
      }),
      El({
        element: "div",
        children: "Checkout ->",
        className:
          "w-[50%] h-[60px] bg-black mr-[24px] rounded-[35px] items-center justify-center text-white grid font-semibold text-[20px] cursor-pointer",
      }),
    ],
    className: "flex items-center justify-between py-[24px] ",
  });
  const home = El({
    element: "div",
    children: [
      El({
        element: "img",
        src: "./src/assets/icons/home.svg",
        className: "mx-auto",
      }),
      El({
        element: "p",
        children: "Home",
        className: "font-semibold text-[10px]",
      }),
    ],
    className: "grid w-[29px] justify-center gap-[2px] text-center",
  });
  const cart = El({
    element: "div",
    children: [
      El({
        element: "img",
        src: "./src/assets/icons/cart.svg",
        className: "mx-auto",
      }),
      El({
        element: "p",
        children: "Cart",
        className: "font-semibold text-[10px]",
      }),
    ],
    className:
      "grid w-[29px] justify-center gap-[2px] text-center cursor-pointer",
    eventListener: [
      {
        event: "click",
        callback: () => router.navigate("/Cart"),
      },
    ],
  });
  const order = El({
    element: "div",
    children: [
      El({
        element: "img",
        src: "./src/assets/icons/cartwheele.svg",
        className: "mx-auto",
      }),
      El({
        element: "p",
        children: "Order",
        className: "font-semibold text-[10px]",
      }),
    ],
    className: "grid w-[29px] justify-center gap-[2px] text-center",
  });
  const wallet = El({
    element: "div",
    children: [
      El({
        element: "img",
        src: "./src/assets/icons/wallet.svg",
        className: "mx-auto",
      }),
      El({
        element: "p",
        children: "Wallet",
        className: "font-semibold text-[10px]",
      }),
    ],
    className: "grid w-[29px] justify-center gap-[2px] text-center",
  });
  const profile = El({
    element: "div",
    children: [
      El({
        element: "img",
        src: "./src/assets/icons/profile.svg",
        className: "mx-auto",
      }),
      El({
        element: "p",
        children: "Profile",
        className: "font-semibold text-[10px]",
      }),
    ],
    className: "grid w-[29px] justify-center gap-[2px] text-center",
  });
  const foot = El({
    element: "div",
    children: [home, cart, order, wallet, profile],
    className:
      " flex w-full justify-between px-[24px] py-[12px] items-center bg-transparent",
  });
  const footer = El({
    element: "div",
    children: [checkout, foot],
    className: "sticky bottom-0 bg-white rounded-t-[25px]",
  });

  const page = El({
    element: "div",
    children: [header, body, footer],
    className: " bg-slate-100 min-h-screen",
  });
  return page;
}
