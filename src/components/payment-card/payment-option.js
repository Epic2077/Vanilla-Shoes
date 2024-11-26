import { El } from "../../utils/create-element";

export default function paymentOptions() {
  const optionsData = [
    {
      name: "My Wallet",
      img: "../../../src/assets/payment-icons/my-wallet.svg",
      id: "wallet",
    },
    {
      name: "PayPal",
      img: "../../../src/assets/payment-icons/paypal.svg",
      id: "paypal",
    },
    {
      name: "Google Pay",
      img: "../../../src/assets/payment-icons/google.svg",
      id: "google",
    },
    {
      name: "Apple Pay",
      img: "../../../src/assets/payment-icons/apple.svg",
      id: "apple",
    },
    {
      name: "**** **** **** **** 4679",
      img: "../../../src/assets/payment-icons/matercard.svg",
      id: "master",
    },
  ];

  const options = optionsData.map((option) => {
    const optionTitle = El({
      element: "label",
      children: option.name,
      for: option.id,
      className: "text-[18px] font-bold",
    });
    const optionLogo = El({
      element: "img",
      src: option.img,
      className: "w-[30px]",
    });
    const radioBtn = El({
      element: "input",
      type: "radio",
      className:
        " bg-transparent col-start-1 row-start-1 appearance-none shrink-0 w-4 h-4 border-2 border-black rounded-full",
      id: option.id,
      name: "paymentOption",
    });
    const radioDot = El({
      element: "div",
      className:
        "col-start-1 row-start-1 w-2 h-2 rounded-full bg-black radio-dot hidden",
    });
    const radio = El({
      element: "div",
      children: [radioBtn, radioDot],
      className: "grid place-items-center ml-auto",
    });

    radioBtn.addEventListener("change", () => {
      document
        .querySelectorAll(".radio-dot")
        .forEach((dot) => dot.classList.add("hidden")); // Hide all dots
      radioDot.classList.remove("hidden"); // Show the dot for the selected radio
    });

    const optionContainer = El({
      element: "div",
      children: [optionLogo, optionTitle, radio],
      className:
        "w-full h-[80px] bg-white flex items-center rounded-[20px] p-[24px] gap-4",
    });
    return optionContainer;
  });
  return options;
}
