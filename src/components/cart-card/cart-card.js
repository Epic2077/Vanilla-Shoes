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
  let totalPrices = 0;
  const cards = userCart.map((cart) => {
    totalPrices = cart.ttlPrice + totalPrices;
    console.log(totalPrices);
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
                  eventListener: [
                    {
                      event: "click",
                      callback: () => {
                        const remove = El({
                          element: "div",
                          children: [
                            El({
                              element: "h2",
                              children: "Remove From Cart?",
                              className: "text-[24px] font-bold text-black",
                            }),
                            El({
                              element: "hr",
                              className: "my-4",
                            }),
                            El({
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
                                          className:
                                            "text-[20px] font-semibold",
                                        }),
                                      ],
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
                                      className:
                                        "flex gap-2 items-center h-max",
                                    }),
                                  ],
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
                                      className:
                                        "px-[15px] py-[5px] bg-gray-200 rounded-full",
                                    }),
                                  ],
                                  className: "flex justify-between",
                                }),
                              ],
                              className: "flex gap-4",
                            }),
                          ],
                          className:
                            "absolute bottom-0 bg-white px-[32px] py-[24px] z-10",
                        });
                        const removeLayer = El({
                          element: "div",
                          children: [],
                          className:
                            "bg-slate-300 opacity-70 w-screen h-screen absolute top-0 ",
                        });
                        document.body.appendChild(removeLayer);
                        document.body.appendChild(remove);
                        document.body.classList.add("overflow-hidden");
                      },
                    },
                  ],
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
  function setTotalPrice() {
    document.getElementById("totalPrice").textContent = `$${totalPrices}.00`;
  }
  setTotalPrice();
  return cards;
}
