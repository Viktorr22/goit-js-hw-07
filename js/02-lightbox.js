import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector('.gallery');
const galleryItem = galleryItems.map((galItem) => {
    return `<a class="gallery__item" href="${galItem.original}"> 
        <img
          class="gallery__image"
          src="${galItem.preview}"
          data-source="${galItem.original}"
          alt="${galItem.description}"
          
        />
      </a>`;
}).join('');
galleryList.insertAdjacentHTML('afterbegin', galleryItem);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

