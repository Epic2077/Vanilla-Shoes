import { router } from "../../routes/router";
import { El } from "../../utils/create-element";

export function footer() {
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
    eventListener: [
      {
        event: "click",
        callback: () => router.navigate("/Order"),
      },
    ],
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

  const footer = El({
    element: "div",
    children: [home, cart, order, wallet, profile],
    className:
      "flex w-full justify-between px-[24px] py-[12px] items-center bg-white",
  });
  return footer;
}
