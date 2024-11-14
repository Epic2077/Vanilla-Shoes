import { El } from "../utils/create-element";
import { footer } from "./footer/footer";

export function layout(main) {
  return El({
    element: "div",
    children: footer(),
    className: "sticky bottom-0",
  });
}
