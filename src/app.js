import { getCuratedPhotos, loadMore } from "./getPhotos";
import { updateInput } from "./utilities";

const searchFormElement = document.querySelector(".header__search-form");
const searchInputElement = document.querySelector(".search-form__search-input");
const searchButtonElement = document.querySelector(".header__search-btn");

let currentSearch;

getCuratedPhotos();

searchFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  currentSearch = searchInputElement.value;
  updateInput(searchInputElement.value);
});

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadMore(currentSearch);
  }
});
