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

  getProducts().then((products) => {
    const brandProduct =
      brandName.toLowerCase() === "all"
        ? products
        : products.filter(
            (product) =>
              product.brand &&
              product.brand.toLowerCase() === brandName.toLowerCase()
          );
    const productElements = brandProduct.map((product) =>
      El({
        element: "div",
        children: [
          El({
            element: "div",
            children: [
              El({
                element: "img",
                src: product.images,
                className: "w-[142px] h-[142px]",
              }),
            ],
            className:
              "w-[182px] h-[182px] grid justify-center items-center bg-[#F3F3F3] rounded-[24px]",
          }),
          El({
            element: "h3",
            children: product.title,
            className: "font-bold text-[20px] mt-[12px]",
          }),
          El({
            element: "p",
            children: `$ ${product.price}`,
            className: "font-semibold text[16px] mt-[8px]",
          }),
        ],
        className: `w-[128px]  grid ${product.brand} mb-[8px]`,
      })
    );
    const productContainer = El({
      element: "div",
      children: productElements,
      className: "grid grid-cols-2 gap-[12px] mt-[16px]",
    });

    const brandPage = El({
      element: "section",
      children: [header, productContainer],
      className: "px-[24px] py-[12px]",
    });
    document.body.innerHTML = "";
    document.body.appendChild(brandPage);
  });
}
