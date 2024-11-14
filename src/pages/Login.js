import { El } from "../utils/create-element";

export default function login() {
  const loginPage = El({
    element: "section",
    children: [],
    className: "grid",
  });
  return loginPage;
}
