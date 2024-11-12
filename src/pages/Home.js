import { El } from "../utils/create-element";

const HomePage = () => {
  const fav = El({
    element: "img",
    src: "./src/assets/image/heart.svg",
    className: "",
  });
  const notif = El({
    element: "img",
    src: "./src/assets/image/bell.svg",
    className: "",
  });
  const icons = El({
    element: "div",
    children: [notif, fav],
    className: "flex w-[24px] gap-[16px] ml-[120px]",
  });
  const login = El({
    element: "p",
    children: "Login",
    className: "text[#152536] text-[16px] font-bold",
  });
  const goodMorning = El({
    element: "p",
    children: "Good Morning 👋",
    className: "text-[#757475] text-[16px] font-medium",
  });
  const pfpContent = El({
    element: "div",
    children: [goodMorning, login],
    className: "grid ml-4",
  });
  const pfp = El({
    element: "div",
    children: [],
    className:
      "bg-[url('./src/assets/image/pfp.png')] w-[48px] h-[48px] rounded-full",
  });
  const profileData = El({
    element: "div",
    children: [pfp, pfpContent],
    className: "flex ",
  });

  const header = El({
    element: "header",
    children: [profileData, icons],
    className: " h-[80px] flex items-center",
  });

  const searchIcon = El({
    element: "img",
    src: "./src/assets/image/search.svg",
    className: "",
  });
  const searchBar = El({
    element: "input",
    type: "search",
    placeholder: "Search",
    className:
      "bg-transparent ml-[4px] font-normal text-[14px] rounded-[4px] w-full outline-none border-none",
  });
  const search = El({
    element: "div",
    children: [searchIcon, searchBar],
    className: "w-full h-[37px] bg-[#FAFAFA] flex items-center px-4 mt-[8px]",
  });

  //For brands use a loop
  const brandsData = [
    { iconSrc: "./src/assets/icons/nike.svg", name: "Nike" },
    { iconSrc: "./src/assets/icons/adidas.svg", name: "Adidas" },
    { iconSrc: "./src/assets/icons/puma.svg", name: "Puma" },
    { iconSrc: "./src/assets/icons/asics.svg", name: "Asics" },
    { iconSrc: "./src/assets/icons/reebok.svg", name: "Reebok" },
    { iconSrc: "./src/assets/icons/newbalance.svg", name: "New Ba.." },
    { iconSrc: "./src/assets/icons/converse.svg", name: "Converse" },
    { iconSrc: "./src/assets/icons/more.svg", name: "More .." },
  ];

  const createBrandElement = (brand) => {
    const icon = El({
      element: "img",
      src: brand.iconSrc,
      className: "w-[30px] h-[19px]",
      // Add an event listener to make the brand circle clickable
      eventListener: [
        {
          event: "click",
          callback: () => {
            console.log(`Brand ${brand.name} clicked!`);
            // Add filter logic here for future use
          },
        },
      ],
    });

    const circle = El({
      element: "div",
      children: [icon],
      className:
        "w-[60px] bg-[#ECECEC] h-[60px] rounded-full grid items-center justify-center",
    });

    const brandNames = El({
      element: "p",
      children: brand.name,
      className: ["text-center"],
    });

    return El({
      element: "div",
      children: [circle, brandNames],
      className:
        "text-center truncate overflow-hidden text-ellipsis whitespace-nowrap w-[70px] grid justify-center",
    });
  };

  const brandElements = brandsData.map(createBrandElement);

  const brands = El({
    element: "div",
    children: brandElements,
    className:
      "mt-[10px] w-[380px] h-[234px] grid grid-cols-4 px-[8px] py-[12px] justify-between gap-[41px]",
  });

  const home = El({
    element: "section",
    children: [header, search, brands],
    className: "px-[24px]",
  });

  return home;
};

export default HomePage;
