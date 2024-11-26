import { El } from "../../utils/create-element";
import { router } from "../../routes/router";

export function back() {
  return El({
    element: "img",
    src: "../src/assets/icons/back.svg",
    className: "cursor-pointer",
    eventListener: [
      {
        event: "click",
        callback: () => router.navigate("/Home"),
      },
    ],
  });
}
export function backToCart() {
  return El({
    element: "img",
    src: "../src/assets/icons/back.svg",
    className: "cursor-pointer",
    eventListener: [
      {
        event: "click",
        callback: () => router.navigate("/Cart"),
      },
    ],
  });
}
export function backToCheckOut() {
  return El({
    element: "img",
    src: "../src/assets/icons/back.svg",
    className: "cursor-pointer",
    eventListener: [
      {
        event: "click",
        callback: () => router.navigate("/Checkout"),
      },
    ],
  });
}
