import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryItemsHTML = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item"><a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsHTML);

function initializeLightbox(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const content = document.createElement('div');
  const img = document.createElement('img');
  img.src = event.target.dataset.source;

  content.append(img);

  const instance = basicLightbox.create(content);
  instance.show();

  document.addEventListener('keydown', onEsc);

  // Zamknięcie obrazka przyciskiem Escape
  function onEsc(event) {
    if (event.key === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', onEsc);
    }
  }
}

galleryContainer.addEventListener('click', initializeLightbox);

// INNE ROZWIĄZANIE, TEŻ POPRAWNE

// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);

// const galleryContainer = document.querySelector('.gallery');

// const galleryItemsHTML = galleryItems
//   .map(
//     (item) =>
//       `<div class="gallery__item"><a class="gallery__link" href="${item.original}">
//     <img
//       class="gallery__image"
//       src="${item.preview}"
//       data-source="${item.original}"
//       alt="${item.description}"
//     />
//   </a>
// </div>`
//   )
//   .join('');

// galleryContainer.insertAdjacentHTML('beforeend', galleryItemsHTML);

// function initializeLightbox() {
//   const content = document.createElement('div'); // Tworzy nowy element HTML <div>, który będzie używany jako kontener dla obrazka w lightboxie. Jest to miejsce, gdzie wyświetlany będzie powiększony obraz.
//   const img = document.createElement('img'); // Tworzy nowy element HTML <img>, który będzie używany do wyświetlania obrazka wewnątrz lightboxa.
//   content.append(img); // Dodaje element <img> do elementu <div>
//   const instance = basicLightbox.create(content); // Tworzy instancję lightboxa, korzystając z biblioteki BasicLightbox. Ta instancja będzie używana do wyświetlania i zamykania lightboxa.

//   galleryContainer.addEventListener('click', (event) => {
//     event.preventDefault(); // Zapobiega domyślnemu działaniu kliknięcia, co jest istotne, by uniknąć otwierania linków klikając na miniaturę obrazu
//     if (event.target.nodeName !== 'IMG') {
//       return; // if... sprawdza, czy elementem docelowym kliknięcia jest element <img> - jeśli nie (np. jeśli kliknięcie było na innym elemencie), to funkcja kończy działanie i nie robi nic
//     }
//     img.src = event.target.dataset.source; // Ustawia źródło (src) elementu <img> na adres oryginalnego obrazka, który jest przechowywany w atrybucie data-source klikniętego elementu <img>. Dzięki temu wyświetlany jest odpowiedni obraz w lightboxie.

//     instance.show(); // Shows a lightbox instance (https://github.com/electerious/basicLightbox#readme).  Wywołuje metodę show() na instancji lightboxa, co powoduje wyświetlenie lightboxa z wybranym obrazem

//     // Zamknięcie obrazka przyciskiem Escape
//     function onEsc(event) {
//       if (event.key === 'Escape') {
//         instance.close();
//         document.removeEventListener('keydown', onEsc);
//       }
//     }

//     document.addEventListener('keydown', onEsc);
//   });
// }

// initializeLightbox(); // bez przywołania funkcji obrazki się nie wyświetlają - tylko pobierają
