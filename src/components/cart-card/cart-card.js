import { findUserById } from "../../api/users";
import { router } from "../../routes/router";
import { El } from "../../utils/create-element";

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
        }),
      ],
      className: "flex items-center p-[20px] gap-4",
    });
  });
  return cards;
}
