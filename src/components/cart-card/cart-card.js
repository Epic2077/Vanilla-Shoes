import { findUserById } from "../../api/users";
import { router } from "../../routes/router";
import { El } from "../../utils/create-element";

//Todo: Add a trash function, complete the order list.

export default async function cartCard() {
  //Get the user thats logged-in
  const userId =
    localStorage.getItem("userId") || sessionStorage.getItem("userId");

  if (!userId) {
    router.navigate("/Login");
    return [];
  }

  console.log(userId);

  //Get the user with the specific ID
  const user = await findUserById(userId);
  const userCart = user.carts || [];

  const cards = userCart.map((cart) => {
    return El({
      element: "div",
      children: [
        El({
          element: "img",
          src: cart.images,
          className: "w-[140px] rounded-[30px]",
        }),
        El({
          element: "div",
          children: [
            El({
              element: "div",
              children: [
                El({
                  element: "h2",
                  children: cart.title,
                  className: "text-[20px] font-semibold",
                }),
                El({
                  element: "img",
                  src: "../../../src/assets/icons/trash.svg",
                  className: "w-[20px] ml-auto cursor-pointer",
                }),
              ],
              className: "flex",
            }),
            El({
              element: "div",
              children: [
                El({
                  element: "div",
                  children: [],
                  className: `rounded-full bg-${cart.selectedColor}-700 w-[20px] h-[20px] `,
                }),
                El({
                  element: "p",
                  children: `${cart.selectedColor} | Size = ${cart.selectedSize}`,
                  className: "text-[15px] text-gray",
                }),
              ],
              className: "flex gap-2 items-center h-max",
            }),
            El({
              element: "div",
              children: [
                El({
                  element: "h2",
                  children: `$${cart.ttlPrice}.00`,
                  className: "text-[20px] font-semibold",
                }),
                El({
                  element: "div",
                  children: cart.qty,
                  className: "px-[15px] py-[5px] bg-gray-200 rounded-full",
                }),
              ],
              className: "flex justify-between",
            }),
          ],
          className: "grid gap-3 w-full ",
        }),
      ],
      className:
        "flex items-center p-[20px] gap-4 bg-white rounded-[30px] h-max mb-[24px]",
    });
  });
  return cards;
}
