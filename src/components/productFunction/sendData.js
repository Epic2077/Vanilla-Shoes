import { router } from "../../routes/router";

export function getColor() {
  const color = document.querySelector(".active-color");

  // Check if any elements exist
  if (!color) {
    console.log("No active color found default: white");
    return "white";
  } else {
    console.log(`Selected color: ${color.id}`);

    return color.id;
  }
}

export function getSize() {
  const size = document.querySelector(".active-size");

  if (!size) {
    console.log("No active size found default: Null");
    return null;
  } else {
    console.log(`Selected size: ${size.textContent}`);
    return size.textContent;
  }
}
