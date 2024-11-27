import { El } from "../utils/create-element";
import { getProducts } from "../api/product";
import { layout } from "../layout/layout";
import Home from "../templates/home";
import { router } from "../routes/router";

const createHeader = () => {
  document.title = "home page";
  const fav = El({ element: "img", src: "./src/assets/image/heart.svg" });
  const notif = El({ element: "img", src: "./src/assets/image/bell.svg" });
  const icons = El({
    element: "div",
    children: [notif, fav],
    className: "flex w-[24px] gap-[16px] ml-[120px]",
  });
  const userName =
    localStorage.getItem("userName") || sessionStorage.getItem("userName");
  function loginName() {
    if (userName) {
      return userName;
    } else {
      return "Login";
    }
  }
  const login = El({
    element: "p",
    children: loginName(),
    className: "text[#152536] text-[16px] font-bold cursor-pointer",
    eventListener: [
      {
        event: "click",
        callback: () => router.navigate("/Login"),
      },
    ],
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

const brandsData = [
  { iconSrc: "./src/assets/icons/nike.svg", name: "Nike", fullName: "Nike" },
  {
    iconSrc: "./src/assets/icons/adidas.svg",
    name: "Adidas",
    fullName: "Adidas",
  },
  { iconSrc: "./src/assets/icons/puma.svg", name: "Puma", fullName: "Puma" },
  { iconSrc: "./src/assets/icons/asics.svg", name: "Asics", fullName: "Asics" },
  {
    iconSrc: "./src/assets/icons/reebok.svg",
    name: "Reebok",
    fullName: "Reebok",
  },
  {
    iconSrc: "./src/assets/icons/newbalance.svg",
    name: "NewBa..",
    fullName: "Newbalance",
  },
  {
    iconSrc: "./src/assets/icons/converse.svg",
    name: "Converse",
    fullName: "Converse",
  },
  { iconSrc: "./src/assets/icons/more.svg", name: "More..", fullName: "More" },
];
const createBrandIcons = () => {
  const createBrandElement = (brand) => {
    const icon = El({
      element: "img",
      src: brand.iconSrc,
      className: "w-[30px] h-[19px]",
      eventListener: [
        {
          event: "click",
          callback: () => router.navigate(`/Home/${brand.fullName}`),
        },
      ],
    });

    const circle = El({
      element: "div",
      children: [icon],
      className:
        "w-[60px] bg-[#ECECEC] h-[60px] rounded-full grid items-center justify-center cursor-pointer",
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

const createFiltration = () => {
  const mostPopular = El({
    element: "h2",
    children: "Most Popular",
    className: "font-semibold text-[20px] text-black",
  });
  const seeAll = El({
    element: "p",
    children: "See All",
    className: "font-semibold text-[16px] text-black cursor-pointer",
    eventListener: [
      {
        event: "click",
        callback: () => router.navigate("/Home/All"),
      },
    ],
  });
  const filterHead = El({
    element: "div",
    children: [mostPopular, seeAll],
    className: "justify-between w-full mb-[20px] flex mt-[4px]",
  });

  function filterProductsByBrand(brand) {
    getProducts()
      .then((products) => {
        console.log(products);

        products.forEach((product) => {
          // Assuming `product.element` refers to the DOM element of the product
          const productElement = document.querySelector(
            `#product-${product.id}`
          );

          let btn;
          if (brand !== "All") {
            btn = document.querySelector(`#btn-${brand.name}`);
          } else {
            btn = document.querySelector(`#btn-${brand}`);
          }

          if (brand === "All" || product.brand === brand.name.toLowerCase()) {
            productElement.classList.remove("hidden");
            btn.classList.add("bg-[#343A40]", "text-white");
            btn.classList.remove("bg-transparent");
          } else {
            productElement.classList.add("hidden");
            btn.classList.remove("bg-[#343A40]", "text-white");
            btn.classList.add("bg-transparent");
          }
        });
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  }
  const filterButtonsActive = El({
    element: "div",
    children: "All",
    id: "btn-All",
    className:
      "bg-[#343A40] px-[20px]  h-[39px] border-[2px] border-[#343A40] text-white font-semibold text-[16px] items-center grid rounded-[25px] cursor-pointer",
    eventListener: [
      {
        event: "click",
        callback: () => filterProductsByBrand("All"),
      },
    ],
  });
  const filterBrand = (brand) => {
    const brandName = El({
      element: "p",
      children: brand.name,
      className: "font-semibold text-[16px] text-[#343A40] bg-transparent",
      id: `text-${brand.name}`,
    });
    const filterButton = El({
      element: "div",
      children: brandName,
      className:
        "grid bg-transparent border-[2px] border-[#343A40] justify-center items-center px-[20px] h-[39px] rounded-[25px] cursor-pointer",
      id: `btn-${brand.name}`,
      eventListener: [
        {
          event: "click",
          callback: () => filterProductsByBrand(brand),
        },
      ],
    });
    return filterButton;
  };
  const filterBody = El({
    element: "div",
    children: [filterButtonsActive, ...brandsData.map(filterBrand)],
    className:
      "flex gap-[12px] max-w-full w-max overflow-x-auto hide-scrollbar overflow-y-hidden h-[50px] ",
  });
  const filter = El({
    element: "div",
    children: [filterHead, filterBody],
    className: "",
  });
  return filter;
};

const createProductCard = (product) => {
  const img = El({
    element: "img",
    src: product.images,
    className: "w-[142px] h-[142px] rounded-[24px]",
  });
  const imgBox = El({
    element: "div",
    children: img,
    className:
      "w-[182px] h-[182px] grid justify-center items-center bg-[#F3F3F3] rounded-[24px]",
  });
  const names = El({
    element: "h3",
    children: product.title,
    className: "font-bold text-[20px] mt-[12px]",
  });
  const price = El({
    element: "p",
    children: `$ ${product.price}.00`,
    className: "font-semibold text[16px] mt-[8px]",
  });
  const card = El({
    element: "div",
    children: [imgBox, names, price],
    id: `product-${product.id}`,
    className: `  grid ${product.brand} mb-[8px] cursor-pointer `,
    eventListener: [
      {
        event: "click",
        callback: () => router.navigate(`/Home/products/${product.id}`),
      },
    ],
  });
  return card;
};
const loadProduct = async (productContainer) => {
  try {
    const products = await getProducts();

    const productCards = products.map(createProductCard);
    productContainer.append(...productCards);
  } catch {
    console.error("Failed to load products:");
  }
};
// Main HomePage function

const HomePage = () => {
  const header = createHeader();
  const search = createSearchBar();
  const brands = createBrandIcons();
  const filter = createFiltration();
  const layouts = layout();

  const productContainer = El({
    element: "div",
    className: "grid grid-cols-2 md:grid-cols-4 gap-[16px] mt-[24px]",
  });

  loadProduct(productContainer);

  return El({
    element: "section",
    children: [header, search, brands, filter, productContainer, layouts],
    className: "px-[24px]",
  });
};

export default HomePage;
