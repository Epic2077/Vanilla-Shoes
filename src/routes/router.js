import Navigo from "navigo";
import OnBoardingPage from "../pages/Onboarding";
import { changePage } from "../utils/change-page";

export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(OnBoardingPage);
  })
  .on("/home", () => {
    // Define other routes as needed, such as for HomePage or ProductPage
  });
