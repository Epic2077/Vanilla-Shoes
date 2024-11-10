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
    className: "w-full h-[37px] bg-[#FAFAFA] flex items-center px-4",
  });

  const home = El({
    element: "section",
    children: [header, search],
    className: "px-[24px]",
  });

  return home;
};

export default HomePage;
