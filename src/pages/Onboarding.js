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
  const newContent = welcome();
  page.innerHTML = newContent.innerHTML;
  //   }, 3000);
  //   setTimeout(() => {
  const questionOne = qOne();
  page.innerHTML = questionOne.innerHTML;
  //   }, 5000);
  return page;
}

function welcome() {
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
      "The best sneakers & shoes e-commerce app of the century for your fashion needs!",
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

function qOne() {
  const newContent = El({
    element: "div",
    children: [],
    className: "",
  });
  const slides = [
    {
      imageSrc: "./src/assets/image/qOne-image.png",
      text: "We provide high quality products just for you",
      activeIndex: 0,
    },
    {
      imageSrc: "./src/assets/image/qTwo-image.png",
      text: "Your satisfaction is our number one priority",
      activeIndex: 1,
    },
    {
      imageSrc: "./src/assets/image/qThree-image.png",
      text: "Let's fulfill your fashion needs with Shoea right now!",
      activeIndex: 2,
    },
  ];

  let currentSlide = 0;

  const indicator = El({
    element: "div",
    children: [],
    className: "flex gap-[6px] mt-[59px] justify-center",
  });

  function renderIndicators() {
    indicator.innerHTML = "";
    slides.forEach((_, index) => {
      const indicatorDot = El({
        element: "div",
        className:
          index === currentSlide
            ? "bg-[#212529] w-[30px] h-[3px]"
            : "bg-slate-400 w-[30px] h-[3px]",
      });
      indicator.appendChild(indicatorDot);
    });
  }

  function displaySlide(container) {
    container.innerHTML = "";

    const image = El({
      element: "img",
      src: slides[currentSlide].imageSrc,
      className: "w-screen mt-[-55px] h-[657px]",
    });

    const text = El({
      element: "h2",
      children: slides[currentSlide].text,
      className:
        "font-semibold text-[32px] text-center leading-[38.73px] px-[24px] py-[30px]",
    });

    renderIndicators();

    const next = El({
      element: "button",
      children: "Next",
      className:
        "w-[380px] mx-[24px] mt-[40px] bg-black font-medium text-[14px] text-white h-[47px] rounded-3xl z-10",
      eventListener: [
        {
          event: "click",
          callback: () => {
            console.log("I'm working");
            currentSlide = (currentSlide + 1) % slides.length;
            displaySlide(newContent);
          },
        },
      ],
    });
    container.append(image, text, indicator, next);
  }
  displaySlide(newContent);

  return newContent;
}
