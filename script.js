console.log("it works");

function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery found');
  }
  //selecte elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  const videos = Array.from(gallery.querySelectorAll('video'));
  const modal = document.querySelector('.click-view-outer');
  let modalInner = document.querySelector('.click-view-inner');
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
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    previousButton.removeEventListener('click', showPrevImage);
    // console.log(widthSelector);
    // modalInner.innerHTML = `
    //     <img class="click-view-inner" src="" alt="">
    // `
    // console.log(modal);
    const widthSelectorRemove = modalInner.classList[1];
    modalInner.classList.remove(widthSelectorRemove);

  }

  function handleKeyUp(event) {
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowRight') showNextImage();
    if (event.key === 'ArrowLeft') showPrevImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    console.log("anyMassage");
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

    const widthSelector = element.classList[0];
    console.log(widthSelector);
    modalInner.classList.add(widthSelector);

    if(element.classList.contains('singlePic')){
      modal.querySelector('img').classList = element.classList[0];
      modal.querySelector('img').src = element.src;
      currentImage = element;
      previousButton.classList.add('hideButton');
      nextButton.classList.add('hideButton');
      openModal();
     }
    // else if(element.classList.contains('video')) {
    //   console.log(element.src);
    //   console.log(element.poster);
    //   previousButton.classList.add('hideButton');
    //   nextButton.classList.add('hideButton');
    //   openModal();
    //   console.log(modalInner.innerHTML);
    //   modalInner.innerHTML = `
    //     <video controls class=${widthSelector} src=${element.src} poster="${element.poster}" type="video/mp4"></video>
    //    `
    // }
    else {
      previousButton.classList.remove('hideButton');
      nextButton.classList.remove('hideButton');
      modal.querySelector('img').classList = element.classList[0];
      console.log(element.classList[0]);
      modal.querySelector('img').src = element.src;
      currentImage = element;

      openModal();
    }

    // function showVideo(element) {
    //   modal.querySelector('img').src = element.src;
    //   currentImage = element;
    //   console.log(modal.querySelector('img').src);
    //   modal.querySelector('img').classList = element.classList[0];
    //   const widthSelector = element.classList[0];
    //   console.log(element.classList[0]);
    //   modalInner.classList.add(widthSelector);
    //   if(!element) {
    //     console.info('no video to show');
    //     return;
    //   }

    //   else {
    //     previousButton.classList.add('hideButton');
    //     nextButton.classList.add('hideButton');
    //     openModal();
    //   }
    // }

  }

  //these are the event listeners
  images.forEach(image => image.addEventListener('click', event => showImage(event.currentTarget)));
  videos.forEach(video => video.addEventListener('click', event => showImage(event.currentTarget)));

  modal.addEventListener('click', handleClickOutside);
}


const galleryFarn = Gallery(document.querySelector('.galleryFarn'));
const gallerySalamander = Gallery(document.querySelector('.gallerySalamander'));
const galleryKK = Gallery(document.querySelector('.galleryKK'));
const galleryRMR = Gallery(document.querySelector('.galleryRMR'));
const galleryUlm = Gallery(document.querySelector('.galleryUlm'));
const galleryIVC = Gallery(document.querySelector('.galleryIVC'));
//const gallerySemikolon = Gallery(document.querySelector('.gallerySemikolon'));
const galleryPowerPray = Gallery(document.querySelector('.galleryPowerPray'));
const galleryYYNKtype = Gallery(document.querySelector('.galleryYYNKtype'));
const galleryCeciliaTosh = Gallery(document.querySelector('.galleryCeciliaTosh'));
//const gallerySittenstrolch = Gallery(document.querySelector('.gallerySittenstrolch'));
//const galleryAYCE = Gallery(document.querySelector('.galleryAYCE'));
const gallerySpäti = Gallery(document.querySelector('.gallerySpäti'));
const galleryEuropa = Gallery(document.querySelector('.galleryEuropa'));
const singlePicGodzilla = Gallery(document.querySelector('.galleryGodzilla'));
const singlePicEKL75 = Gallery(document.querySelector('.galleryEKL75'));
const singlePicMoMoney = Gallery(document.querySelector('.galleryMoMoney'));
const singlePicEklon = Gallery(document.querySelector('.galleryEklon'));
const singlePicYumYum = Gallery(document.querySelector('.galleryYumYumPack'));
const singlePicGraffitiMo = Gallery(document.querySelector('.galleryGraffitiMoritz'));
const singlePicEKLType = Gallery(document.querySelector('.galleryEKLType'));
const singlePicGangster = Gallery(document.querySelector('.galleryOGGangster'));
const singlePicYumYumType = Gallery(document.querySelector('.galleryYumYumType'));
const singlePicRMR = Gallery(document.querySelector('.galleryRMRIcons'));
const singlePicEKLMotionKey = Gallery(document.querySelector('.galleryEKLMotionKey'));
const singlePicMeatGreet = Gallery(document.querySelector('.galleryMeatGreet'));
//const singleServe = Gallery(document.querySelector('.galleryServe'));
const singlePicNewWorld = Gallery(document.querySelector('.galleryNewWorld'));
const singlePicBurningHouse = Gallery(document.querySelector('.galleryBurningHouse'));
const singlePicWaterIsLife = Gallery(document.querySelector('.galleryWaterIsLife'));
const singlePicTetris = Gallery(document.querySelector('.galleryTetris'));







// // selects elements that we will use for the click Gallery
// const singlePictureSelection = document.querySelectorAll('.singlePic');
// const clickViewOuter = document.querySelector('.click-view-outer');
// const clickViewInner = document.querySelector('.click-view-inner');

// // handle card click event function
// const handleCardButtonClick = (event) => {
//   // create variables for event current target and card
//   const singlePic = event.currentTarget;
//   console.log(singlePic);
//   // grab image src, desc and alt
//   const imgSrc = singlePic.querySelector('img').src;
//   // can add a decription in the gallery in the next  line just uncomment below and add <p>${desc}</p> after the img tag below
//   // const desc = card.dataset.description;
//   //this line adds the alternate description for screen readers or in case the picture does not load
//   const name = card.querySelector('h4').textContent;
//    //populate the modal with the new info
//   clickViewInner.innerHTML = `
//     <img  src="${imgSrc}" alt="${name}"/>
//     `;
//   clickViewOuter.classList.add('open');
// }

// //sets the card to listen for a click by the user
// singlePictureSelection.forEach(singlePic =>
//   singlePic.addEventListener('click', handleCardButtonClick)
//   );
// console.log(handleCardButtonClick);

// //function to close click gallery
// const closeGallery = () => {
//   clickViewOuter.classList.remove('open');
// }
// //sets the 'outside area' to listen for a click to close the gallery
// clickViewOuter.addEventListener('click', event => {
//   const isOutside = !event.target.closest('.click-view-inner');
//   console.log(isOutside);
//   if (isOutside) {
//     closeGallery();
//   }
// });

// //sets the 'outside area' to listen for excape key to close the gallery
// window.addEventListener('keydown', event => {
//   console.log(event);
//   if (event.key === 'Escape') {
//     closeGallery();
//   }
// });
