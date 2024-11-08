import { El } from "../utils/create-element";

export default function OnBoardingPage() {
  const testing = El({
    element: "h1",
    children: "Testing this out",
    className: "color-black ",
  });

  const container = El({
    element: "div",
    children: testing,
    className: "w-screen h-screen grid justify-center items-center",
  });
  return container;
}
