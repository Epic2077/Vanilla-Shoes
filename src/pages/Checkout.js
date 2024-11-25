import address from "../components/checkoutElements/address";
import checkoutCard from "../components/checkoutElements/checkoutCard";
import shipping from "../components/checkoutElements/shipping";
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
  const hr = El({
    element: "hr",
    className: "border-slate-300 mt-4 border-y-1",
  });
  const oderList = El({
    element: "h2",
    children: "Order List",
    className: "text-[25px] font-semibold",
  });

  const body = El({
    element: "div",
    children: [shippingAddress, addressContainer, hr, oderList],
    className: "px-[32px] py-[10px] grid gap-4",
    id: "checkoutContainer",
  });
  return body;
}
async function addCardsToBody(bodyContainer) {
  const cards = await checkoutCard();

  // Create a card container and append cards
  const cardContainer = El({
    element: "div",
    children: cards,
    className: "grid gap-4",
  });

  // Append the card container to the provided body container
  bodyContainer.appendChild(cardContainer);
}
async function shippingToBody(bodyContainer) {
  const shippingStat = await shipping();
  const hr = El({
    element: "hr",
    className: "border-slate-300 mt-4 border-y-1",
  });
  const shippingTitle = El({
    element: "h2",
    children: "Choose Shipping",
    className: "text-[25px] font-semibold",
  });
  const shippingCon = El({
    element: "div",
    children: [hr, shippingTitle, shippingStat],
    className: "grid gap-4",
  });
  bodyContainer.appendChild(shippingCon);
}
export default function checkOutPage() {
  const head = header();
  const body = main();
  addCardsToBody(body);
  shippingToBody(body);
  return El({
    element: "div",
    children: [head, body],
    className: "bg-slate-100 min-h-screen",
  });
}
