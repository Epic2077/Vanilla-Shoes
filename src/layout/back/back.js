import { El } from "../../utils/create-element";

export function back() {
  return El({
    element: "img",
    src: "../src/assets/icons/back.svg",
    className: "cursor-pointer",
    eventListener: [
      {
        event: "click",
        callback: () => {
          router.navigate("/Home");
        },
      },
    ],
  });
}
