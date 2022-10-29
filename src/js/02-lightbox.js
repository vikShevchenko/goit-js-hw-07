import { galleryItems } from './gallery-items.js';
// Change code below this line
const divRef = document.querySelector(".gallery");

function createGalleryMarcup(items) {
  return items
    .map(
      (item) => `
      <a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}" title="" /></a>   
  `
    )
    .join("");
}

divRef.innerHTML = createGalleryMarcup(galleryItems);

let gallery = new SimpleLightbox(".gallery a",{
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionPosition: 'bottom',
  captionsData: "alt",//
});
gallery.on("show.simplelightbox", function () {
  
});

console.log(gallery)
