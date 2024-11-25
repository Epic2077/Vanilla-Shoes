import { findUserById } from "../../api/users";
import { El } from "../../utils/create-element";

export default async function promoCode() {
  const userId =
    localStorage.getItem("userId") || sessionStorage.getItem("userId");

  if (!userId) {
    router.navigate("/Login");
    return [];
  }

  const user = await findUserById(userId);
  console.log("Fetched user:", user);

  const userPromo = user.promo;
  console.log(userPromo);
  const addBtn = El({
    element: "div",
    children: "+",
    className:
      "text-white text-[30px] w-[60px] h-[60px] rounded-full bg-black ml-auto grid justify-center items-center cursor-pointer",
    eventListener: [
      {
        event: "click",
        callback: () => {},
      },
    ],
  });
  const promoInput = El({
    element: "input",
    placeholder: "Enter Promo Code",
    className:
      "bg-slate-200 text-slate-800 text-[16px] p-4 h-[60px] w-[80%] rounded-[20px]",
  });
  const promoContainer = El({
    element: "div",
    children: [promoInput, addBtn],
    className: "flex grid-4",
  });
  return promoContainer;
}
