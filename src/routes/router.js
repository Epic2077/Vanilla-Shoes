import Navigo from "navigo";
import OnBoardingPage from "../pages/Onboarding";
import HomePage from "../pages/Home";
import { changePage } from "../utils/change-page";
import { filtered } from "../components/filteration";
import productCard from "../components/productPage";
import login from "../pages/Login";

export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(OnBoardingPage);
  })
  .on("/Home", () => {
    changePage(HomePage);
  })
  .on("/Home/:brandName", ({ data }) => {
    const { brandName } = data;
    filtered(brandName);
  })
  .on("/Home/products/:productId", ({ data }) => {
    const { productId } = data;
    productCard(productId);
  })
  .on("/Login", () => {
    changePage(login);
  });
