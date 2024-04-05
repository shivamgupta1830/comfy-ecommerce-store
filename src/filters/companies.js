import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (store) => {
  let companiesSet = new Set(
    store.map((product) => {
      return product.company;
    })
  );

  const companies = ["all", ...companiesSet];

  const companiesDOM = getElement(".companies");
  companiesDOM.innerHTML = companies
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join("");

  companiesDOM.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("company-btn")) {
      let newStore = [];
      if (element.textContent === "all") {
        newStore = [...store];
      } else {
        newStore = store.filter(
          (product) => product.company === e.target.textContent
        );
      }
      display(newStore, getElement(".products-container"), true);
    }
  });
};

export default setupCompanies;
