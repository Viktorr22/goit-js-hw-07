import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector('.gallery');
const galleryItem = galleryItems.map((galItem) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${galItem.original}"> 
        <img
          class="gallery__image"
          src="${galItem.preview}"
          data-source="${galItem.original}"
          alt="${galItem.description}"
        />
      </a>
    </div>`;
}).join('');
galleryList.insertAdjacentHTML('afterbegin', galleryItem);

galleryList.addEventListener('click', getOriginalImage);



function getOriginalImage(event) {
    event.preventDefault();    

    const instance = basicLightbox.create(`
    <img src = "${event.target.dataset.source}">
   `);
      instance.show(event);


    document.addEventListener('keydown', closeOriginalImage);
       function closeOriginalImage(event) {
          if (event.code === 'Escape') {
            instance.close(event);
            document.removeEventListener('keydown', closeOriginalImage);
          }     
         
          
}
}








