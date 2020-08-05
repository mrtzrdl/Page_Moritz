console.log("it works");

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

 