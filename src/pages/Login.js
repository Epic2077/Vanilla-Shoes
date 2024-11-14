import { El } from "../utils/create-element";
import { router } from "../routes/router";

export default function login() {
  const back = El({
    element: "img",
    src: "./src/assets/icons/back.svg",
    className: "cursor-pointer",
    eventListener: [
      {
        event: "click",
        callback: () => router.navigate("/Home"),
      },
    ],
  });
  const header = El({
    element: "div",
    children: back,
    className: "w-full h-[56px] items-center grid",
  });

  const logo = El({
    element: "img",
    src: "./src/assets/icons/big-logo.svg",
    className: "w-[54px] h-[81px] mt-[76px]",
  });
  const body = El({
    element: "div",
    children: [logo],
    className: "grid w-full justify-center",
  });
  const loginPage = El({
    element: "section",
    children: [header, body],
    className: "grid px-[24px] py-[12px]",
  });
  return loginPage;
}
