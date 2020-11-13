
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
  const modalVideo = modal.querySelector('video');
  const modalImage = modal.querySelector('img');
  let currentImage;

  function openModal() {
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
    const widthSelector = element.classList[0];
    modalInner.classList.add(widthSelector);

    if (!element) {
      console.info('no image to show');
      return;
    }

    if (element.classList.contains('singlePic')) {
      modal.querySelector('img').classList = element.classList[0];
      modal.querySelector('img').src = element.src;
      currentImage = element;
      previousButton.classList.add('hideButton');
      nextButton.classList.add('hideButton');
      modalVideo.classList.add('hideVideo');
      openModal();
    }
    else if(element.classList.contains('video')) {
      modalImage.classList.add('hideImage');
      modal.querySelector('video').classList = element.classList[0];
      modal.querySelector('video').src = element.src;
      modal.querySelector('video').poster = element.poster;
      currentVideo = element;
      previousButton.classList.add('hideButton');
      nextButton.classList.add('hideButton');
      openModal();
    }
    else {
      previousButton.classList.remove('hideButton');
      nextButton.classList.remove('hideButton');
      modal.querySelector('img').classList = element.classList[0];
      modal.querySelector('img').src = element.src;
      currentImage = element;
      modalVideo.classList.add('hideVideo');
      openModal();
    }
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
const gallerySemikolon = Gallery(document.querySelector('.gallerySemikolon'));
const galleryPowerPray = Gallery(document.querySelector('.galleryPowerPray'));
const galleryYYNKtype = Gallery(document.querySelector('.galleryYYNKtype'));
const galleryCeciliaTosh = Gallery(document.querySelector('.galleryCeciliaTosh'));
const gallerySittenstrolch = Gallery(document.querySelector('.gallerySittenstrolch'));
const galleryAYCE = Gallery(document.querySelector('.galleryAYCE'));
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
const singleServe = Gallery(document.querySelector('.galleryServe'));
const singlePicNewWorld = Gallery(document.querySelector('.galleryNewWorld'));
const singlePicBurningHouse = Gallery(document.querySelector('.galleryBurningHouse'));
const singlePicWaterIsLife = Gallery(document.querySelector('.galleryWaterIsLife'));
const singlePicTetris = Gallery(document.querySelector('.galleryTetris'));
