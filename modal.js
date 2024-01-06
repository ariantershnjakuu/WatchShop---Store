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

// Mobile navigation toggle
const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
// Add an event listener to the button
btnMobileNav.addEventListener("click", function () {
  // Toggle the "open" class on the menu
  header.classList.toggle("nav-open");
});
