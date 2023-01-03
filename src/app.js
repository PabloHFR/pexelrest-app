const AUTH = "563492ad6f9170000100000156af9ae065434075b1f1bd9d0fc2de9d";
const galleryElement = document.querySelector(".gallery");
const searchInputElement = document.querySelector(".search-form__search-input");
const searchButtonElement = document.querySelector(".header__search-btn");

let searchValue;

async function getCuratedPhotos() {
  const dataFetch = await fetch("https://api.pexels.com/v1/curated", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: AUTH,
    },
  });

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

getCuratedPhotos();
