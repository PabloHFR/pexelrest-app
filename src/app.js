const AUTH = "563492ad6f9170000100000156af9ae065434075b1f1bd9d0fc2de9d";
const galleryElement = document.querySelector(".gallery");
const searchFormElement = document.querySelector(".header__search-form");
const searchInputElement = document.querySelector(".search-form__search-input");
const searchButtonElement = document.querySelector(".header__search-btn");

let searchValue;

async function getCuratedPhotos() {
  const dataFetch = await fetch(
    "https://api.pexels.com/v1/curated?per_page=30",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: AUTH,
      },
    }
  );

  const data = await dataFetch.json();
  data.photos.forEach((photo) => {
    const markup = `
    <div class="gallery-img">
    <img src="${photo.src.large}"></img>
    </div>
    `;

    galleryElement.insertAdjacentHTML("afterbegin", markup);
  });
}

async function searchPhotos(query) {
  clearImages();

  const dataFetch = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=20&size=medium`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: AUTH,
      },
    }
  );

  const data = await dataFetch.json();
  data.photos.forEach((photo) => {
    const markup = `
    <div class="gallery-img">
    <img src="${photo.src.large}"></img>
    </div>
    `;

    galleryElement.insertAdjacentHTML("afterbegin", markup);
  });
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
  updateInput(searchInputElement.value);
});
