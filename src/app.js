const AUTH = "563492ad6f9170000100000156af9ae065434075b1f1bd9d0fc2de9d";
let URL = "https://api.pexels.com/v1/curated?per_page=15&page=1&size=medium";

const galleryElement = document.querySelector(".gallery");
const searchFormElement = document.querySelector(".header__search-form");
const searchInputElement = document.querySelector(".search-form__search-input");
const searchButtonElement = document.querySelector(".header__search-btn");

let page = 1;
let currentSearch;

async function getApiImages(URL) {
  const dataFetch = await fetch(URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: AUTH,
    },
  });

  const data = dataFetch.json();
  return data;
}

function displayImages(imagesObject) {
  imagesObject.photos.forEach((photo) => {
    const markup = `
    <div class="gallery-img">
    <a target="_blank" href="${photo.src.large}">
      <img src="${photo.src.large}"></img> 
    </a>
    </div>
    `;

    galleryElement.insertAdjacentHTML("beforeend", markup);
  });
}

async function getCuratedPhotos() {
  const imagesObject = await getApiImages(URL);
  displayImages(imagesObject);
}

async function searchPhotos(query) {
  clearImages();
  URL = `https://api.pexels.com/v1/search?query=${query}&per_page=15&size=medium`;

  const imagesObject = await getApiImages(URL);
  displayImages(imagesObject);
}

async function loadMore() {
  page++;
  if (currentSearch) {
    URL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=20&page=${page}&size=medium`;
  } else {
    URL = `https://api.pexels.com/v1/curated?per_page=15&page=${page}&size=medium`;
  }

  const imagesObject = await getApiImages(URL);
  displayImages(imagesObject);
}

function updateInput(query) {
  searchPhotos(query);
}

function clearImages() {
  galleryElement.innerHTML = "";
  searchInputElement.value = "";
}

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
    loadMore();
  }
});
