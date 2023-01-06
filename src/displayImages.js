const galleryElement = document.querySelector(".gallery");

export function displayImages(imagesObject) {
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
