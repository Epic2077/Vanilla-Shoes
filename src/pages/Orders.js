import { activeCard } from "../components/order-cards/active-card";
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

async function updateCards() {
  console.log("updateCards called"); // Debugging step

  const ActiveCards = await activeCard();

  console.log("ActiveCards:", ActiveCards); // Ensure ActiveCards is valid

  const isActive = document
    .getElementById("active")
    .classList.contains("active");

  if (isActive) {
    // Clear previous content
    const bodyContainer = document.getElementById("bodyContainer");
    if (!bodyContainer) {
      console.error("Body container not found!");
      return;
    }
    bodyContainer.innerHTML = ""; // Clear existing content

    // Append new cards
    if (ActiveCards) {
      bodyContainer.appendChild(ActiveCards); // Append directly
      console.log("ActiveCards appended to bodyContainer");
    } else {
      console.error("No ActiveCards returned from activeCard()");
    }
  }
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
    const bodyContainer = document.getElementById("bodyContainer");
    if (bodyContainer) {
      updateCards(bodyContainer);
    } else {
      console.error("Body container not found during tab toggle!");
    }
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
        isActive ? "border-black active" : "border-gray-400"
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

  const bodyHead = El({
    element: "div",
    children: [active, completed],
    className: "flex",
  });
  const bodyCard = El({
    element: "div",
    children: [],
    className: "",
    id: "bodyContainer",
  });
  const bodyContainer = El({
    element: "div",
    children: [bodyHead, bodyCard],
    className: "grid px-[32px]",
  });
  return bodyContainer;
}

export default function orderPage() {
  const head = header();
  const main = body();

  const page = El({
    element: "div",
    children: [head, main],
    className: "min-h-screen bg-slate-100",
  });

  setTimeout(() => {
    updateCards(document.getElementById("bodyContainer"));
  }, 0); // Delay updateCards to allow DOM rendering

  return page;
}
