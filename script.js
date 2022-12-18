const carousel = document.querySelector(".carousel");
const carouselItems = carousel.children;
const prevBtn = document.getElementById("prevbtn");
const nextBtn = document.getElementById("nextbtn");

// Keep track of the current item index
let currentIndex = 0;

// Function to update the current item
function updateItem(index) {
  // Set the current index
  currentIndex = index;

  // Loop through the items and set the appropriate transform value
  // to show the current item
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.transform = `translateX(${currentIndex * -100}%)`;
  }
}

// Add event listeners to the prev and next buttons to update the item
prevBtn.addEventListener("click", function () {
  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    prevIndex = carouselItems.length - 1;
  }
  updateItem(prevIndex);
});
nextBtn.addEventListener("click", function () {
  let nextIndex = currentIndex + 1;
  if (nextIndex >= carouselItems.length) {
    nextIndex = 0;
  }
  updateItem(nextIndex);
});

// Initialize the carousel by setting the initial item
updateItem(currentIndex);

// Mobile navigation toggle
const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
// Add an event listener to the button
btnMobileNav.addEventListener("click", function () {
  // Toggle the "open" class on the menu
  header.classList.toggle("nav-open");
});

//MODAL WINDOW
window.addEventListener("load", function () {
  document.getElementById("modal-container").style.display = "block";
});

document.getElementById("close-button").addEventListener("click", function () {
  document.getElementById("modal-container").style.display = "none";
});

const modalBtn = document.querySelector("#subscribe-button");
modalBtn.addEventListener("click", function () {
  var email = document.getElementById("email-input").value;
  console.log(`Email: ${email}`);
});

// CHECKBOX VALIDATION
// get a reference to all the checkbox elements
// get a reference to all the checkbox elements
const checkboxes = document.querySelectorAll(
  '.smartwatch input[type="checkbox"]'
);

let total = 0; // variable to store the total price

// add a 'change' event listener to each checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    // if the checkbox is checked
    if (this.checked) {
      // get a reference to the price element
      const price = this.parentElement.parentElement.parentElement
        .querySelector(".discount-paragraph")
        .textContent.replace("$", "");
      // add the price to the total
      total += parseFloat(price);
    } else {
      // if the checkbox is unchecked, get a reference to the price element
      const price = this.parentElement.parentElement.parentElement
        .querySelector(".discount-paragraph")
        .textContent.replace("$", "");
      // subtract the price from the total
      total -= parseFloat(price);
    }
    // log the total to the console
    console.log(total);
  });
});
