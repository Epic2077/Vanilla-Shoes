import { findUserById } from "../../api/users";
import { El } from "../../utils/create-element";

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

  const activeCards = userOrder.map((order) =>
    El({
      element: "div",
      children: [
        El({
          element: "img",
          src: order.images,
          className: "w-[142px] h-[142px] rounded-[25px]",
        }),
      ],
      className: "p-4 border  bg-white rounded-[25px]",
    })
  );

  return El({
    element: "div",
    children: activeCards,
    className: "grid gap-4 mt-5",
  });
}
