import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");

// for (const i of galleryItems) {
//   const link = document.createElement("a");
//   link.className = "gallery__item";
//   link.href = i.original;
//   const image = document.createElement("img");
//   image.className = "gallery__image";
//   image.src = i.preview;
//   image.alt = i.description;
//   gallery.append(link);
//   link.append(image);
//   console.log(image);
// }

const stringForHTML = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"/></a>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", stringForHTML);

let lightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionSelector: ".gallery__image",
  captionsData: "alt",
  captionDelay: "250ms",
});

