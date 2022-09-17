import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.innerHTML = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item"><a class="gallery__link" href="https://www.google.com/">
  <img class="gallery__image" src="${item.preview}"
  data-source="${item.original}" alt="${item.description}"/></a></div>`
  )
  .join("");

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const urlImg = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${urlImg}" width="1200" height="900">`,
    {
      onShow: () => {
        document.addEventListener("keydown", PressEsc);
      },
      onClose: () => {
        document.removeEventListener("keydown", PressEsc);
      },
    }
  );

  instance.show();

  function PressEsc(event) {
    if (event.key === "Escape") instance.close();
  }
});
