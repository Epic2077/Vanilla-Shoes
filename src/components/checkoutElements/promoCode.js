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
      "text-white text-[30px] w-[60px] h-[60px] rounded-full bg-black grid justify-center items-center cursor-pointer",
    eventListener: [
      {
        event: "click",
        callback: () => {
          const promoInput = document.getElementById("promoInput");
          const promoValue = promoInput.value;
          if (promoValue === userPromo) {
            promoInput.classList.add("hidden");
            const discount = El({
              element: "div",
              children: [
                "Discount 30% Off",
                El({
                  element: "p",
                  children: "x",
                }),
              ],
              className:
                "flex gap-2 bg-black text-white p-4 font-semibold text-[16px] rounded-[20px]",
            });
            const promo = document.getElementById("promo");
            promo.appendChild(discount);
          } else {
            alert("Promo Code Was Wrong!");
          }
        },
      },
    ],
  });
  function wholePrice() {
    let allPrice = 0;
    const userOrder = user.orders;
    userOrder.forEach((product) => (allPrice = product.ttlPrice + allPrice));
    return allPrice;
  }
  const Prices = El({
    element: "div",
    children: [
      El({
        element: "div",
        children: [
          El({
            element: "p",
            children: "Amount",
            className: "text-[16px] text-gray-400",
          }),
          El({
            element: "p",
            children: `$${wholePrice()}.00`,
            className: "text-[16px] text-black font-semibold ml-auto",
          }),
        ],
        className: "flex",
      }),
      El({
        element: "div",
        children: [
          El({
            element: "p",
            children: "Shipping",
            className: "text-[16px] text-gray-400",
          }),
          El({
            element: "p",
            children: "-",
            className: "text-[16px] text-black font-semibold ml-auto",
          }),
        ],
        className: "flex",
      }),
      El({
        element: "hr",
        className: "my-2",
      }),
      El({
        element: "div",
        children: [
          El({
            element: "p",
            children: "Total",
            className: "text-[16px] text-gray-400",
          }),
          El({
            element: "p",
            children: "-",
            className: "text-[16px] text-black font-semibold ml-auto",
          }),
        ],
        className: "flex",
      }),
    ],
    className: "w-full bg-white grid rounded-[20px] gap-4 p-4",
  });
  const promoInput = El({
    element: "input",
    placeholder: "Enter Promo Code",
    className:
      "bg-slate-200 text-slate-800 text-[16px] p-4 h-[60px] w-[80%] rounded-[20px]",
    id: "promoInput",
  });
  const promoContainer = El({
    element: "div",
    children: [promoInput, addBtn],
    className: "flex gap-4",
    id: "promo",
  });
  const promotion = El({
    element: "div",
    children: [promoContainer, Prices],
    className: "grid gap-4",
    id: "promotion",
  });
  return promotion;
}
