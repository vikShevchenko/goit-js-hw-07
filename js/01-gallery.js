import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divRef = document.querySelector(".gallery");
console.log(divRef);

function createGalleryMarcup(items) {
  return items
    .map(
      (item) => `<div class = "gallery__item>
        <a class = "gallery__linc" href="${item.original}">
        <img 
        class = "gallery__image"
        src = "${item.preview}"
        data-source ="${item.original}"
        alt = "${item.description}"
        />
        </a>
        </div>`
    )
    .join("");
}

const addGallaryMarcup = createGalleryMarcup(galleryItems);

divRef.innerHTML = addGallaryMarcup;

divRef.addEventListener("click", onImageClick);

function onImageClick(evt) {
  blockStandartAction(evt);

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
<img src = "${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  divRef.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

function blockStandartAction(evt) {
  evt.preventDefault();
}
