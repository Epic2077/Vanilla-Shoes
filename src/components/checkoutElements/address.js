import { El } from "../../utils/create-element";

function close() {
  document
    .querySelector("body")
    .removeChild(document.getElementById("changeLayer"));
  document
    .querySelector("body")
    .removeChild(document.getElementById("locContainer"));
}
export default function address() {
  const locationLogo = El({
    element: "div",
    children: [
      El({
        element: "div",
        children: [
          El({
            element: "img",
            src: "../../../src/assets/icons/location.svg",
            className: "w-[25px] h-[25px]",
          }),
        ],
        className:
          "bg-black grid justify-center items-center rounded-full w-[45px] h-[45px]",
      }),
    ],
    className:
      "  bg-slate-200 grid justify-center items-center w-[65px] h-[65px] rounded-full",
  });
  const locationDetail = El({
    element: "div",
    children: [
      El({
        element: "h3",
        children: "Home",
        className: "text-[20px] font-semibold",
        id: "addressTitle",
      }),
      El({
        element: "p",
        children: "61480 Sunbrook Park, PC 5679",
        className: "text-[14px] text-slate-600 font-light",
        id: "addressInfo",
      }),
    ],
    className: "grid gap-1",
  });
  const pen = El({
    element: "img",
    src: "../../../src/assets/icons/pen.svg",
    className: "ml-auto w-[25px] mr-[5px] cursor-pointer",
    eventListener: [
      {
        event: "click",
        callback: () => {
          window.scroll(0, 0);
          const changeLocation = El({
            element: "div",
            children: [
              El({
                element: "input",
                value: "Home",
                className: "bg-slate-100 w-full h-[50px] rounded-[15px] pl-2",
                id: "locationTitle",
              }),
              El({
                element: "input",
                value: "61480 Sunbrook Park, PC 5679",
                className: "bg-slate-100 w-full h-[50px] rounded-[15px] pl-2",
                id: "locationInfo",
              }),
              El({
                element: "div",
                children: [
                  El({
                    element: "div",
                    children: "Cancel",
                    className:
                      "w-[45%] h-[50px] bg-black text-white rounded-[25px] justify-center items-center grid",
                    eventListener: [
                      {
                        event: "click",
                        callback: () => close(),
                      },
                    ],
                  }),
                  El({
                    element: "div",
                    children: "Change",
                    className:
                      "w-[45%] h-[50px] bg-slate-700 text-white rounded-[25px] justify-center items-center grid",
                    eventListener: [
                      {
                        event: "click",
                        callback: () => {
                          const locTitle =
                            document.getElementById("locationTitle").value;
                          const locInfo =
                            document.getElementById("locationInfo").value;
                          document.getElementById("addressTitle").textContent =
                            locTitle;
                          document.getElementById("addressInfo").textContent =
                            locInfo;
                          close();
                        },
                      },
                    ],
                  }),
                ],
                className: "flex gap-4",
              }),
            ],
            className:
              "w-[400px] h-[300px] bg-white grid rounded-[25px] px-[35px] py-[35px] gap-4 z-20",
          });
          const changeLocContainer = El({
            element: "div",
            children: [changeLocation],
            className:
              "w-screen h-screen absolute top-0 grid justify-center items-center",
            id: "locContainer",
          });
          const layer = El({
            element: "div",
            children: [],
            className:
              "w-screen h-screen absolute top-0 bg-slate-500 opacity-70 z-10",
            id: "changeLayer",
            eventListener: [
              {
                event: "click",
                callback: () => close(),
              },
            ],
          });
          document.querySelector("body").appendChild(layer);
          document.querySelector("body").appendChild(changeLocContainer);
        },
      },
    ],
  });
  const addressContainer = El({
    element: "div",
    children: [locationLogo, locationDetail, pen],
    className:
      "w-full p-4 bg-white flex items-center mt-5 rounded-[25px] gap-4",
  });
  return addressContainer;
}
