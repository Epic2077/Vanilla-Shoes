import { El } from "../utils/create-element";

export default function OnBoardingPage() {
  const logoIcon = El({
    element: "img",
    src: "./src/assets/image/logo-white.svg",
    className: "w-[28.54px] h-[39.93px]",
  });
  const logo = El({
    element: "div",
    children: logoIcon,
    className:
      " bg-black rounded-full w-[59px] h-[59px] grid justify-center items-center",
  });
  const logoName = El({
    element: "h1",
    children: "Shoea",
    className: "color-black font-bold text-logo font-sans ml-2",
  });
  const loading = El({
    element: "img",
    src: "./src/assets/image/spinner-atom.svg",
    className: "absolute bottom-[117px] animate-spin",
  });
  let container = El({
    element: "div",
    children: [logo, logoName, loading],
    className: "w-screen h-screen flex justify-center items-center",
  });
  let page = El({
    element: "section",
    children: container,
  });

  //   setTimeout(() => {
  const newContent = newData();
  page.innerHTML = newContent.innerHTML;
  //   }, 5000);
  return page;
}

function newData() {
  const welcome = El({
    element: "h2",
    children: "Welcome to 👋",
    className: "font-semibold text-[40px] text-white mb-[16px]",
  });
  const name = El({
    element: "h1",
    children: "Shoea",
    className: "font-bold text-[72px] text-white mb-[28px]",
  });
  const des = El({
    element: "p",
    children:
      "The best sneakers & shoes e-commerse app of the century for your fashion needs!",
    className: "font-semibold text-white text-[16px]",
  });
  const content = El({
    element: "div",
    children: [welcome, name, des],
    className: "grid ",
  });
  const backgroundFilter = El({
    element: "div",
    children: content,
    className:
      "bg-gradient-to-b from-[#00000000] to-[#000000CC] w-screen h-screen px-[32px] grid items-end pb-[74px]",
  });
  const background = El({
    element: "div",
    children: backgroundFilter,
    className: "bg-[url('./src/assets/image/bg-1.png')] w-screen h-screen",
  });
  const newContent = El({
    element: "div",
    children: [background],
    className: "text-center text-xl font-bold mt-5",
  });
  return newContent;
}
