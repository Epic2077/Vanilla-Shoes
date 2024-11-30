import { getProducts } from "../api/product";
import { El } from "../utils/create-element";

export default function searchPage() {
  //Retrieving the search term from localStorage
  const searchTerm = localStorage.getItem("searchTerm") || "";

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value.trim();
    localStorage.setItem("searchTerm", newSearchTerm);

    console.log("updated search term: ", newSearchTerm);
  };

  let products = [];

  async function fetchProducts() {
    products = await getProducts();
  }

  function searchProducts(query) {
    if (!query.trim()) {
      console.log("empty search input"); //Add history later
    }

    return products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  function displayResults(result) {}

  const searchInput = El({
    element: "input",
    type: "search",
    value: searchTerm,
    placeholder: "Search...",
    className: "w-full h-full border-0 bg-transparent outline-none text-[20px]",
    eventListener: [
      {
        event: "input",
        callback: handleSearch,
      },
    ],
  });
  const searchICon = El({
    element: "img",
    src: "../../src/assets/image/search.svg",
    className: "w-[23px]",
  });
  const searchBar = El({
    element: "div",
    children: [searchICon, searchInput],
    className:
      "w-full h-[70px] bg-transparent rounded-[20px] border-black p-4 border-[2px] flex items-center gap-4",
  });
  const searchContainer = El({
    element: "div",
    children: [searchBar],
    className: "px-[24px] py-[32px]",
  });
  return searchContainer;
}
