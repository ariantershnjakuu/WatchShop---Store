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
