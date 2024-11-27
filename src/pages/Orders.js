import { router } from "../routes/router";
import { El } from "../utils/create-element";

function header() {
  const header = El({
    element: "div",
    children: [
      El({
        element: "img",
        src: "../../src/assets/image/logo.svg",
        className: "w-[24px]",
        eventListener: [
          {
            event: "click",
            callback: () => router.navigate("/Home"),
          },
        ],
      }),
      El({
        element: "h2",
        children: "My Order",
        className: "text-[25px] text-black font-bold",
      }),
    ],
    className: "flex gap-5 px-[32px] py-[24px]",
  });
  return header;
}

function body() {
  const toggleTab = (activeTab, inactiveTab) => {
    document.getElementById(activeTab).classList.add("border-black");
    document.getElementById(activeTab).classList.remove("border-gray-400");
    document
      .getElementById(`${activeTab}-text`)
      .classList.remove("text-gray-400");

    document.getElementById(inactiveTab).classList.add("border-gray-400");
    document.getElementById(inactiveTab).classList.remove("border-black");
    document
      .getElementById(`${inactiveTab}-text`)
      .classList.add("text-gray-400");
  };

  const createTab = (id, text, isActive) =>
    El({
      element: "div",
      children: [
        El({
          element: "h3",
          children: text,
          className: `text-[22px] text-center ${
            isActive ? "" : "text-gray-400"
          } mb-4`,
          id: `${id}-text`,
        }),
      ],
      id,
      className: `w-[50%] border-b-4 mt-5 ${
        isActive ? "border-black" : "border-gray-400"
      }`,
      eventListener: [
        {
          event: "click",
          callback: () =>
            toggleTab(id, id === "active" ? "completed" : "active"),
        },
      ],
    });

  const completed = createTab("completed", "Completed", false); // Not active by default
  const active = createTab("active", "Active", true); // Active by default

  const bodyContainer = El({
    element: "div",
    children: [active, completed],
    className: "flex px-[32px]",
  });
  return bodyContainer;
}
export default function orderPage() {
  const head = header();
  const main = body();

  return El({
    element: "div",
    children: [head, main],
    className: "min-h-screen bg-slate-200",
  });
}
