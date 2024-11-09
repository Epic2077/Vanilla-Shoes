import { El } from "../utils/create-element";

export default function OnBoardingPage() {
  const logoIcon = El({
    element: "img",
    src: "./src/assets/image/logo-white.svg",
    className: "w-[28.54px] h-[39.93px]",
  });
  const logo = El({
    element: "div",
    children: logoIcon,
    className:
      " bg-black rounded-full w-[59px] h-[59px] grid justify-center items-center",
  });
  const logoName = El({
    element: "h1",
    children: "Shoea",
    className: "color-black font-bold text-logo font-sans ml-2",
  });

  const container = El({
    element: "div",
    children: [logo, logoName],
    className: "w-screen h-screen flex justify-center items-center",
  });
  return container;
}
