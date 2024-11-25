import { back } from "../layout/back/back";
import { El } from "../utils/create-element";

function header() {
  const header = El({
    element: "div",
    children: [
      back(),
      El({
        element: "h1",
        children: "Checkout",
        className: "ml-[20px] text-[30px] font-semibold",
      }),
    ],
    className: "px-[32px] py-[24px] flex",
  });
  return header;
}
export default function checkOutPage() {
  const head = header();
  return El({
    element: "div",
    children: [head],
    className: "",
  });
}
