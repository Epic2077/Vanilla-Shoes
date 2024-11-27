import { baseUrl } from "../../api/config";
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
  // bg-rose-700 bg-emerald-700 bg-red-700 bg-gray-700 bg-teal-700 bg-white-700
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
                              className:
                                "text-[24px] font-bold text-black text-center",
                            }),
                            El({
                              element: "hr",
                              className: "my-4 border-slate-300 border-[1px]",
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
                                              className:
                                                "text-[15px] text-gray",
                                            }),
                                          ],
                                          className:
                                            "flex gap-2 items-center h-max mt-4",
                                        }),
                                      ],
                                    }),
                                    El({
                                      element: "div",
                                      children: [
                                        El({
                                          element: "h2",
                                          children: `$${cart.ttlPrice}.00`,
                                          className:
                                            "text-[20px] font-semibold",
                                        }),
                                        El({
                                          element: "div",
                                          children: cart.qty,
                                          className:
                                            "px-[15px] py-[5px] bg-gray-200 rounded-full grid justify-center items-center w-[35px] h-[35px]",
                                        }),
                                      ],
                                      className: "flex justify-between",
                                    }),
                                  ],
                                  className: "grid gap-4",
                                }),
                              ],
                              className:
                                "flex gap-[24px] bg-white rounded-[25px] px-[32px] py-[24px]",
                            }),
                            El({
                              element: "hr",
                              className: "my-4 border-slate-300 border-[1px]",
                            }),
                            El({
                              element: "div",
                              children: [
                                El({
                                  element: "div",
                                  children: "Cancel",
                                  className:
                                    "text-black text-[20px] font-semibold grid justify-center items-center bg-slate-200 rounded-[35px] w-[190px] h-[70px] z-10",
                                  id: "cancel",
                                }),
                                El({
                                  element: "div",
                                  children: "Yes, Remove",
                                  className:
                                    "text-white text-[20px] font-semibold grid justify-center items-center bg-black rounded-[35px] w-[190px] h-[70px] z-10 cursor-pointer",
                                  eventListener: [
                                    {
                                      event: "click",
                                      callback: async () => {
                                        const wantedProductIndex =
                                          userCart.findIndex(
                                            (product) => product.id === cart.id
                                          );

                                        if (wantedProductIndex === -1) {
                                          console.error(
                                            "Product not found in the cart."
                                          );
                                          return;
                                        }

                                        // Remove the product from the user's cart
                                        userCart.splice(wantedProductIndex, 1);
                                        try {
                                          const response = await fetch(
                                            `http://localhost:3000/users/${userId}`,
                                            {
                                              method: "PATCH",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                              },
                                              body: JSON.stringify({
                                                carts: userCart, // Update the cart
                                              }),
                                            }
                                          );
                                          if (!response.ok) {
                                            throw new Error(
                                              `Failed to update cart: ${response.status} ${response.statusText}`
                                            );
                                          }

                                          console.log("Removed successfully");
                                          location.reload(); // Refresh the page to reflect changes
                                        } catch (error) {
                                          console.error(
                                            "Error while removing product:",
                                            error.message
                                          );
                                        }
                                      },
                                    },
                                  ],
                                }),
                              ],
                              className: "flex gap-[20px]",
                            }),
                          ],
                          className:
                            "absolute bottom-0 bg-slate-100 px-[32px] py-[24px] z-10 w-full rounded-t-[35px]",
                          id: "removeLayer",
                        });
                        const removeLayer = El({
                          element: "div",
                          children: [],
                          className:
                            "bg-slate-300 opacity-70 w-screen h-screen absolute top-0 ",
                          id: "layer",
                        });
                        window.scrollTo(0, 0);
                        document.body.appendChild(removeLayer);
                        document.body.appendChild(remove);
                        document.body.classList.add("overflow-hidden");
                        const close = document.getElementById("layer");
                        const cancel = document.getElementById("cancel");

                        close.addEventListener("click", () => {
                          document.body.removeChild(
                            document.getElementById("layer")
                          );
                          document.body.removeChild(
                            document.getElementById("removeLayer")
                          );
                          document.body.classList.remove("overflow-hidden");
                        });
                        cancel.addEventListener("click", () => {
                          document.body.removeChild(
                            document.getElementById("layer")
                          );
                          document.body.removeChild(
                            document.getElementById("removeLayer")
                          );
                          document.body.classList.remove("overflow-hidden");
                        });
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
