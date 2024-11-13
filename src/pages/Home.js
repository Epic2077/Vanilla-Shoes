import { El } from "../utils/create-element";

const createHeader = () => {
  const fav = El({ element: "img", src: "./src/assets/image/heart.svg" });
  const notif = El({ element: "img", src: "./src/assets/image/bell.svg" });
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
    className:
      "bg-[url('./src/assets/image/pfp.png')] w-[48px] h-[48px] rounded-full",
  });

  const profileData = El({
    element: "div",
    children: [pfp, pfpContent],
    className: "flex",
  });

  return El({
    element: "header",
    children: [profileData, icons],
    className: "h-[80px] flex items-center",
  });
};

const createSearchBar = () => {
  const searchIcon = El({
    element: "img",
    src: "./src/assets/image/search.svg",
  });
  const searchBar = El({
    element: "input",
    type: "search",
    placeholder: "Search",
    className:
      "bg-transparent ml-[4px] font-normal text-[14px] rounded-[4px] w-full outline-none border-none",
  });

  return El({
    element: "div",
    children: [searchIcon, searchBar],
    className: "w-full h-[37px] bg-[#FAFAFA] flex items-center px-4 mt-[8px]",
  });
};

const createBrandIcons = () => {
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
      eventListener: [
        {
          event: "click",
          callback: () => console.log(`Brand ${brand.name} clicked!`),
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
      className: ["text-center truncate"],
    });

    return El({
      element: "div",
      children: [circle, brandNames],
      className:
        "text-center truncate overflow-hidden text-ellipsis whitespace-nowrap w-[70px] grid justify-center",
    });
  };

  return El({
    element: "div",
    children: brandsData.map(createBrandElement),
    className:
      "mt-[10px] w-[380px] h-[234px] grid grid-cols-4 px-[8px] py-[12px] justify-between gap-[41px]",
  });
};

// Main HomePage function

const HomePage = () => {
  const header = createHeader();
  const search = createSearchBar();
  const brands = createBrandIcons();

  return El({
    element: "section",
    children: [header, search, brands],
    className: "px-[24px]",
  });
};

export default HomePage;
