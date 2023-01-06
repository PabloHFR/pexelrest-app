import { clearImages } from "./utilities";
import { displayImages } from "./displayImages";
import { getApiImages } from "./getApiImages";

let URL = "https://api.pexels.com/v1/curated?per_page=15&page=1&size=medium";
let page = 1;

export async function getCuratedPhotos() {
  const imagesObject = await getApiImages(URL);
  displayImages(imagesObject);
}

export async function searchPhotos(query) {
  clearImages();
  URL = `https://api.pexels.com/v1/search?query=${query}&per_page=15&size=medium`;

  const imagesObject = await getApiImages(URL);
  displayImages(imagesObject);
}

export async function loadMore(currentSearch) {
  page++;
  if (currentSearch) {
    URL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=20&page=${page}&size=medium`;
  } else {
    URL = `https://api.pexels.com/v1/curated?per_page=15&page=${page}&size=medium`;
  }

  const imagesObject = await getApiImages(URL);
  displayImages(imagesObject);
}
