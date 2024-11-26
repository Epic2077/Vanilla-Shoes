import address from "../components/checkoutElements/address";
import checkoutCard from "../components/checkoutElements/checkoutCard";
import promoCode from "../components/checkoutElements/promoCode";
import shipping from "../components/checkoutElements/shipping";
import { back } from "../layout/back/back";
import { router } from "../routes/router";
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
async function promoToBody(bodyContainer) {
  const promo = await promoCode();
  const hr = El({
    element: "hr",
    className: "border-slate-300 mt-4 border-y-1",
  });
  const promoTitle = El({
    element: "h2",
    children: "Promo Code",
    className: "text-[25px] font-semibold",
  });
  const promoCon = El({
    element: "div",
    children: [hr, promoTitle, promo],
    className: "grid gap-4 mb-4",
  });

  bodyContainer.appendChild(promoCon);
}
async function loadContentInOrder(body) {
  await addCardsToBody(body); // Wait for this to complete before proceeding
  await shippingToBody(body); // Wait for this to complete
  await promoToBody(body); // Finally, execute this
}

function foot() {
  return El({
    element: "div",
    children: [
      El({
        element: "div",
        children: "Continue to Payment ->",
        className:
          "text-[20px] font-semibold grid justify-center items-center bg-black text-white rounded-[25px] h-[50px]",
      }),
    ],
    className:
      "h-[90px] border-gray-300 border-[1px] rounded-t-[25px] sticky bottom-0 py-4 px-[32px] bg-slate-100",
    eventListener: [
      {
        event: "click",
        callback: () => {
          router.navigate("/Payment");
        },
      },
    ],
  });
}
export default function checkOutPage() {
  const head = header();
  const body = main();
  loadContentInOrder(body);
  const footer = foot();
  return El({
    element: "div",
    children: [head, body, footer],
    className: "bg-slate-100 min-h-screen",
  });
}
