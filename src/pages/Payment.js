import { findUserById } from "../api/users";
import paymentOptions from "../components/payment-card/payment-option";
import { backToCheckOut } from "../layout/back/back";
import { router } from "../routes/router";
import { El } from "../utils/create-element";

function header() {
  const header = El({
    element: "div",
    children: [
      backToCheckOut(),
      El({
        element: "h1",
        children: "Payment Methods",
        className: "ml-[20px] text-[27px] font-bold",
      }),
    ],
    className: "flex px-[32px] py-[24px]",
  });
  return header;
}

function optionsToBody() {
  const options = paymentOptions();

  return El({
    element: "div",
    children: options,
    className: "grid gap-6",
  });
}

function body() {
  const bodyTitle = El({
    element: "h3",
    children: "Select the payment method you want to use",
    className: "text-[16px] text-gray-600",
  });
  const body = El({
    element: "div",
    children: [bodyTitle, optionsToBody()],
    className: "grid gap-5 mt-6 px-[32px]",
  });
  return body;
}

function foot() {
  return El({
    element: "div",
    children: [
      El({
        element: "div",
        children: "Confirm Payment",
        className:
          "text-[20px] font-semibold grid justify-center items-center bg-black text-white rounded-[25px] h-[60px] cursor-pointer",
      }),
    ],
    className:
      "h-[100px] border-gray-300 border-[1px] rounded-t-[25px] absolute bottom-0 py-4 px-[32px] bg-slate-100 w-screen",
    eventListener: [
      {
        event: "click",
        callback: async () => {
          const userId =
            localStorage.getItem("userId") || sessionStorage.getItem("userId");

          if (!userId) {
            router.navigate("/Login");
            return [];
          }

          const user = await findUserById(userId);

          const userOrder = user.orders || [];
          const userComplete = user.complete || [];

          userOrder.forEach((orderProduct) => {
            const existingCompleteIndex = userComplete.findIndex(
              (completeProduct) => completeProduct.id === orderProduct.id
            );
            if (existingCompleteIndex !== -1) {
              userComplete[existingCompleteIndex].qty =
                parseInt(userComplete[existingCompleteIndex].qty) +
                parseInt(orderProduct.qty);
              userComplete[existingCompleteIndex].ttlPrice +=
                orderProduct.ttlPrice;
            } else {
              userComplete.push({ ...orderProduct });
            }
          });

          const response = await fetch(
            `http://localhost:3000/users/${userId}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                orders: [],
                complete: userComplete,
              }),
            }
          );
          console.log("Checkout successful");
          console.log("completed: ", userComplete);
          console.log("Orders: ", userOrder);

          const layer = El({
            element: "div",
            children: "",
            className:
              "w-screen h-screen absolute bg-gray-600 opacity-70 top-0",
          });
          const success = El({
            element: "div",
            children: [
              El({
                element: "div",
                children: [
                  El({
                    element: "div",
                    children: [
                      El({
                        element: "img",
                        src: "../../src/assets/icons/cartwheel-white.svg",
                        className: "w-10",
                      }),
                    ],
                    className:
                      "bg-black rounded-full w-[150px] h-[150px] grid justify-center items-center mb-8 mt-4 mx-auto",
                  }),
                  El({
                    element: "h3",
                    children: "Order Successful!",
                    className:
                      "text-[18px] font-semibold text-black text-center",
                  }),
                  El({
                    element: "p",
                    children: "You have successfully made order",
                    className: "text-gray-600 text-[14px] text-center",
                  }),
                  El({
                    element: "div",
                    children: "View Order",
                    className:
                      "w-full h-[55px] bg-black text-white grid items-center justify-center rounded-[25px]",
                    eventListener: [
                      {
                        event: "click",
                        callback: () => router.navigate("/Order"),
                      },
                    ],
                  }),
                  El({
                    element: "div",
                    children: "Go To Main Page",
                    className:
                      "w-full h-[55px] bg-gray-500 text-white grid items-center justify-center rounded-[25px]",
                    eventListener: [
                      {
                        event: "click",
                        callback: () => router.navigate("/Home"),
                      },
                    ],
                  }),
                ],
                className:
                  "w-[330px] h-[500px] bg-white rounded-[35px] grid justify-center p-[24px]",
              }),
            ],
            className:
              "w-screen h-screen absolute top-0 grid justify-center items-center",
          });
          document.body.append(layer, success);
        },
      },
    ],
  });
}

export default function payment() {
  const head = header();
  const main = body();
  const footer = foot();
  return El({
    element: "div",
    children: [head, main, footer],
    className: "bg-slate-100 min-h-screen  ",
  });
}
