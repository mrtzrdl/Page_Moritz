console.log("it works");

const imageModalSelect = document.querySelectorAll('.card');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

// 3. handle card click event function 

const handleCardButtonClick = (event) => {
  // create variables for event current target and card 
  const card = event.currentTarget;
  
  console.log(card);
  // grab image src, desc and alt
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h4').textContent;
   //populate the modal with the new info 
  modalInner.innerHTML = `
    <img  src="${imgSrc}" alt="${name}"/>
    <p>${desc}</p>
    `;
  modalOuter.classList.add('open');
  console.log(modalOuter);
}

imageModalSelect.forEach(card =>
  card.addEventListener('click', handleCardButtonClick)
  );
console.log(handleCardButtonClick);  

const closeModal = () => {
  modalOuter.classList.remove('open');
}

