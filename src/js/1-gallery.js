import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import images from './images.js';

const galleryBox = document.querySelector('.gallery');

const markup = createMarkup(images).join('');

function createMarkup(array) {
  return array.map(
    image => `
    <li class="gallery-item">
    <a class="gallery-link" href=${image.original}>
      <img class="gallery-img" src=${image.preview} alt=${image.description} />
    </a>
    </li>
  `
  );
}

galleryBox.insertAdjacentHTML('beforeend', markup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  disableRightClick: true,
});

gallery.on('nextDone.simplelightbox', function () {
  console.log(123);
});

// console.log(markup);
