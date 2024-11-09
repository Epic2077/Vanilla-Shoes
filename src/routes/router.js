import Navigo from "navigo";
import OnBoardingPage from "../pages/Onboarding";
import HomePage from "../pages/Home";
import { changePage } from "../utils/change-page";

export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(OnBoardingPage);
  })
  .on("/Home", () => {
    changePage(HomePage); // Set the HomePage component for the "/home" route
  });
