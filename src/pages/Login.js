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
  const loginPage = El({
    element: "section",
    children: [back],
    className: "grid",
  });
  return loginPage;
}
