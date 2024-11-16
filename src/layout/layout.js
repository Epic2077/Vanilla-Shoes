import { El } from "../utils/create-element";
import { footer } from "./footer/footer";
import { back } from "./back/back";

export function layout(main) {
  return El({
    element: "div",
    children: footer(),
    className: "sticky bottom-0",
  });
}

export function layoutBack() {
  return El({
    element: "div",
    children: back(),
    className: "",
  });
}
