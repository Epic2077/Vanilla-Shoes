import { findUserById, getUsers } from "../../api/users";
import { router } from "../../routes/router";
import { El } from "../../utils/create-element";

// bg-rose-700 bg-emerald-700 bg-red-700 bg-gray-700 bg-teal-700 bg-white-700
export default async function checkoutCard() {
  const userId =
    localStorage.getItem("userId") || sessionStorage.getItem("userId");

  if (!userId) {
    router.navigate("/Login");
    return [];
  }
  const user = await findUserById(userId);
  console.log("Fetched userL", user);

  const userOrders = user.orders || [];

  const card = userOrders.map((order) => {
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
          children: `${order.selectedColor} | Size = ${order.selectedSize}`,
          className: "text-[15px] text-gray",
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
          className: "text-[20px] font-semibold",
        }),
        El({
          element: "div",
          children: order.qty,
          className: "px-[15px] py-[5px] bg-gray-200 rounded-full",
        }),
      ],
      className: "flex justify-between",
    });
    const detailContainer = El({
      element: "div",
      children: [cardName, cardDetail, cardPrice],
      className: "grid gap-2",
    });
    const cardContainer = El({
      element: "div",
      children: [cardImg, detailContainer],
      className: "bg-white w-full p-4 flex items-center gap-4 rounded-[25px]",
    });
    return cardContainer;
  });
  return card;
}
