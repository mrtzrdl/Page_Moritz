console.log("it works");

function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery found');
  }
  //selecte elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.click-view-outer');
  const previousButton = modal.querySelector('.previous');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    console.info('opening modal..');
    // first check if modal is alread open 
    if (modal.matches('.open')) {
      console.info('modal already open');
      return;
    }
    modal.classList.add('open');

    // event listeners to be bound when we open modal
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    previousButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');
  }

  function handleKeyUp(event) {
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowRight') showNextImage();
    if (event.key === 'ArrowLeft') showPrevImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    console.log(nextElementSibling);
  }
  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function handleClickOutside(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }

  }


  function showImage(element) {
    if (!element) {
      console.info('no image to show');
      return;
    }
    //update modal with this info
    console.log(element);
    modal.querySelector('img').src = element.src;
    currentImage = element;
    openModal();
  }

  //these are the event listeners
  images.forEach(image => image.addEventListener('click', event => showImage(event.currentTarget)));
  modal.addEventListener('click', handleClickOutside);


}
const galleryFarn = Gallery(document.querySelector('.galleryFarn'));
const gallerySalamander = Gallery(document.querySelector('.gallerySalamander'));









// selects elements that we will use for the click Gallery
const cardItemSelection = document.querySelectorAll('.card');
const clickViewOuter = document.querySelector('.click-view-outer');
const clickViewInner = document.querySelector('.click-view-inner');

// handle card click event function 
const handleCardButtonClick = (event) => {
  // create variables for event current target and card 
  const card = event.currentTarget;
  console.log(card);
  // grab image src, desc and alt
  const imgSrc = card.querySelector('img').src;
  // can add a decription in the gallery in the next  line just uncomment below and add <p>${desc}</p> after the img tag below 
  // const desc = card.dataset.description;
  //this line adds the alternate description for screen readers or in case the picture does not load
  const name = card.querySelector('h4').textContent;
   //populate the modal with the new info 
  clickViewInner.innerHTML = `
    <img  src="${imgSrc}" alt="${name}"/>
    `;
  clickViewOuter.classList.add('open');
}

//sets the card to listen for a click by the user
cardItemSelection.forEach(card =>
  card.addEventListener('click', handleCardButtonClick)
  );
console.log(handleCardButtonClick);  

//function to close click gallery
const closeGallery = () => {
  clickViewOuter.classList.remove('open');
}
//sets the 'outside area' to listen for a click to close the gallery
clickViewOuter.addEventListener('click', event => {
  const isOutside = !event.target.closest('.click-view-inner');
  console.log(isOutside);
  if (isOutside) {
    closeGallery();
  }
});

//sets the 'outside area' to listen for excape key to close the gallery
window.addEventListener('keydown', event => {
  console.log(event);
  if (event.key === 'Escape') {
    closeGallery();
  }
});

 