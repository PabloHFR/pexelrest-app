import { searchPhotos } from "./getPhotos";

const galleryElement = document.querySelector(".gallery");
const searchInputElement = document.querySelector(".search-form__search-input");

export function clearImages() {
  galleryElement.innerHTML = "";
  searchInputElement.value = "";
}

export function updateInput(query) {
  searchPhotos(query);
}
