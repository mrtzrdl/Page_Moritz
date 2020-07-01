const gallery = document.querySelector(".gallery");

//function to generate html that passes in heights to make each of the pictures
function generateHTML([w, h]) {
  return `
          <div class="item w${w} h${h}">
          <img src="src/images/${randomPicNumber(15)}.jpg" class="image">
          </div>
        `;
}

// console.log(array[Math.floor(Math.random() * array.length)]);
//function to generate random number for pictures
function randomPicNumber() {
  const numberOfPics = 16;
  const array = Array.from({ length: numberOfPics }, (v, k) => k + 1);
  const picSelector = array[Math.floor(Math.random() * array.length)];
  console.log(picSelector);
  return picSelector;
}


//function to generate randsom numbers for sizing items
function randomSpanNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//function to generate random arrays to set size of items
const digits = Array.from({ length: 15 }, () => [
  randomSpanNumber(2, 5),
  randomSpanNumber(2, 5),
]);
const html = digits.map(generateHTML).join(" ");
console.log(html);

gallery.innerHTML = html;

