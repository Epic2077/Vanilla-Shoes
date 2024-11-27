import { findUserById } from "../../api/users";
import { router } from "../../routes/router";
import { El } from "../../utils/create-element";

// bg-rose-700 bg-emerald-700 bg-red-700 bg-gray-700 bg-teal-700 bg-white-700

export async function activeCard() {
  const userId =
    localStorage.getItem("userId") || sessionStorage.getItem("userId");

  const user = await findUserById(userId);

  if (!user || !user.orders) {
    console.error("User or user orders not found.");
    return El({
      element: "div",
      children: ["No active orders."],
      className: "text-black text-center",
    });
  }

  const userOrder = user.orders;
  console.log(userOrder);

  const activeCards = userOrder.map((order) => {
    const cardImg = El({
      element: "img",
      src: order.images,
      className: "w-[140px] rounded-[30px]",
    });
    const cardName = El({
      element: "h2",
      children: order.title,
      className: "text-[20px] font-semibold",
    });
    const cardDetail = El({
      element: "div",
      children: [
        El({
          element: "div",
          children: [],
          className: `rounded-full bg-${order.selectedColor}-700 w-[20px] h-[20px] `,
        }),
        El({
          element: "p",
          children: `${order.selectedColor} | Size = ${order.selectedSize} | Qty = ${order.qty}`,
          className: "text-[12px] text-gray",
        }),
      ],
      className: "flex gap-2 items-center h-max",
    });
    const cardPrice = El({
      element: "div",
      children: [
        El({
          element: "h2",
          children: `$${order.ttlPrice}.00`,
          className: "text-[18px] font-semibold",
        }),
        El({
          element: "div",
          children: "Track Order",
          className:
            "bg-black rounded-[20px] h-[35px] w-[95px] ml-auto text-white grid justify-center items-center text-[13px]",
          eventListener: [
            {
              event: "click",
              callback: () => router.navigate("/Checkout"),
            },
          ],
        }),
      ],
      className: "flex justify-between items-center",
    });
    const detailContainer = El({
      element: "div",
      children: [cardName, cardDetail, cardPrice],
      className: "grid gap-4",
    });
    const cardContainer = El({
      element: "div",
      children: [cardImg, detailContainer],
      className: "bg-white w-full p-4 flex items-center gap-4 rounded-[25px]",
    });
    return cardContainer;
  });

  return El({
    element: "div",
    children: activeCards,
    className: "grid gap-4 mt-5",
  });
}
