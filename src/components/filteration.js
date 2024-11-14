import { El } from "../utils/create-element";
import { getProducts } from "../api/product";
import { router } from "../routes/router";

export function filtered(brandName) {
  document.title = brandName;

  const back = El({
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
  const title = El({
    element: "h1",
    children: brandName,
    className: "font-semibold text-[20px]",
  });
  const header = El({
    element: "div",
    children: [back, title],
    className: "flex gap-[12px] items-center",
  });

  const brandPage = El({
    element: "section",
    children: [header],
    className: "px-[24px] py-[12px]",
  });
  document.body.innerHTML = "";
  document.body.appendChild(brandPage);
}
