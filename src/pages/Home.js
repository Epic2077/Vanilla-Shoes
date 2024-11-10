import { El } from "../utils/create-element";

const HomePage = () => {
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
    className: "flex",
  });

  const header = El({
    element: "header",
    children: [profileData],
    className: "w-screen h-[80px] flex items-center",
  });

  const home = El({
    element: "section",
    children: [header],
    className: "px-[24px] w-screen",
  });

  return home;
};

export default HomePage;
