import Navigo from "navigo";
import OnBoardingPage from "../pages/Onboarding";
import HomePage from "../pages/Home";
import { changePage } from "../utils/change-page";
import { filtered } from "../components/filteration";
import productCard from "../components/productPage";
import login from "../pages/Login";
import cartPage from "../pages/Cart";
import checkOutPage from "../pages/Checkout";
import payment from "../pages/Payment";
import orderPage from "../pages/Orders";
import searchPage from "../pages/Search";

export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(OnBoardingPage);
  })
  .on("/Cart", () => {
    changePage(cartPage);
  })
  .on("/Home", () => {
    changePage(HomePage);
  })
  .on("/Home/:brandName", ({ data }) => {
    const { brandName } = data;
    filtered(brandName);
  })
  .on("/Search", () => {
    changePage(searchPage);
  })
  .on("/Home/products/:productId", ({ data }) => {
    const { productId } = data;
    productCard(productId);
  })
  .on("/Checkout", () => {
    changePage(checkOutPage);
  })
  .on("/Payment", () => {
    changePage(payment);
  })
  .on("/Order", () => {
    changePage(orderPage);
  })
  .on("/Login", () => {
    changePage(login);
  });
