import { El } from "../../utils/create-element";

export default async function renderColors(colors) {
  let selectedColor = colors[colors.length - 1];
  // bg-rose-700 bg-emerald-700 bg-red-700 bg-gray-700 bg-teal-700
  const colorElement = colors.map((color) => {
    const colorOption = El({
      element: "div",
      children: "",
      className: ` w-[40px] h-[40px] rounded-full bg-${color}-700`,
      id: color,
      eventListener: [
        {
          event: "click",
          callback: () => {
            console.log("color event working");
            colorElement.forEach((cl) => {
              cl.classList.remove(
                "border-[2px]",
                "border-black",
                "active-color"
              );
            });

            event.target.classList.add(
              "border-[2px]",
              "border-black",
              "active-color"
            );
            selectedColor = color;
          },
        },
      ],
    });
    return colorOption;
  });
  return { colorElement, selectedColor };
}
