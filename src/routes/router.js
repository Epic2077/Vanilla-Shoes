import OnBoardingPage from "../pages/Onboarding";

export const router = new Navigo("/");

router.on("/", () => {
  changePage(OnBoardingPage);
});
