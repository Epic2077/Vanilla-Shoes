import address from "../components/checkoutElements/address";
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
        className: "ml-[20px] text-[27px] font-bold",
      }),
    ],
    className: "px-[32px] py-[24px] flex",
  });
  return header;
}

function main() {
  const shippingTitle = El({
    element: "h2",
    children: "Shipping Address",
    className: "text-[25px] font-semibold ",
  });
  const shippingAddress = El({
    element: "div",
    children: [shippingTitle],
    className: "",
  });
  const addressContainer = El({
    element: "div",
    children: [address()],
    className: "",
  });
  const body = El({
    element: "div",
    children: [shippingAddress, addressContainer],
    className: "px-[32px] py-[10px] grid",
  });
  return body;
}
export default function checkOutPage() {
  const head = header();
  const body = main();
  return El({
    element: "div",
    children: [head, body],
    className: "bg-slate-100 min-h-screen",
  });
}
