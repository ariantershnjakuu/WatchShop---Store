/*********************************/
/* SECTION PRODDUCT */
/*********************************/
//Quantity selection//
const decrementBtn = document.querySelector(".decrement");
const incrementBtn = document.querySelector(".increment");
const quantityInput = document.querySelector(".quantity");

// Add event listeners to the buttons
decrementBtn.addEventListener("click", () => {
  // Decrement the value of the input element by 1
  quantityInput.value = Math.max(1, Number(quantityInput.value) - 1);
});

incrementBtn.addEventListener("click", () => {
  // Increment the value of the input element by 1
  quantityInput.value = Math.min(100, Number(quantityInput.value) + 1);
});

// Size selection links//
// Get the size links
const sizeS = document.querySelector("#size-s");
const sizeM = document.querySelector("#size-m");
const sizeL = document.querySelector("#size-l");
// Add event listeners to the size links
sizeS.addEventListener("click", () => {
  // Remove the "selected" class from all links
  sizeS.classList.remove("selected");
  sizeM.classList.remove("selected");
  sizeL.classList.remove("selected");

  // Add the "selected" class to the clicked link
  sizeS.classList.add("selected");

  // Update the selected size value
  selectedSize = "s";
});
sizeM.addEventListener("click", () => {
  // Remove the "selected" class from all links
  sizeS.classList.remove("selected");
  sizeM.classList.remove("selected");
  sizeL.classList.remove("selected");

  // Add the "selected" class to the clicked link
  sizeM.classList.add("selected");

  // Update the selected size value
  selectedSize = "m";
});
sizeL.addEventListener("click", () => {
  // Remove the "selected" class from all links
  sizeS.classList.remove("selected");
  sizeM.classList.remove("selected");
  sizeL.classList.remove("selected");

  // Add the "selected" class to the clicked link
  sizeL.classList.add("selected");

  // Update the selected size value
  selectedSize = "l";
});

// Material selection links//
const felt = document.querySelector("#felt");
const leather = document.querySelector("#leather");
const denim = document.querySelector("#denim");
// Add event listeners to the material links
felt.addEventListener("click", () => {
  // Remove the "selected" class from all links
  felt.classList.remove("selected");
  leather.classList.remove("selected");
  denim.classList.remove("selected");

  // Add the "selected" class to the clicked link
  felt.classList.add("selected");

  // Update the selected material value
  selectedMaterial = "felt";
});
leather.addEventListener("click", () => {
  // Remove the "selected" class from all links
  felt.classList.remove("selected");
  leather.classList.remove("selected");
  denim.classList.remove("selected");

  // Add the "selected" class to the clicked link
  leather.classList.add("selected");

  // Update the selected material value
  selectedMaterial = "leather";
});
denim.addEventListener("click", () => {
  // Remove the "selected" class from all links
  felt.classList.remove("selected");
  leather.classList.remove("selected");
  denim.classList.remove("selected");

  // Add the "selected" class to the clicked link
  denim.classList.add("selected");

  // Update the selected material value
  selectedMaterial = "denim";
});

// Add to cart button
// add alert when buy now button is clicked
const buyNowBtn = document.querySelector(".add-to-cart-btn");
buyNowBtn.addEventListener("click", () => {
  alert(
    `Thanks for choosing us. Your order of ${
      document.querySelector(".form-heading").innerHTML
    } has been successfully placed!`
  );
  // add console log for product details
  console.log(`Product: ${document.querySelector(".form-heading").innerHTML}`);
  console.log(`Size: ${window.selectedSize}`);
  console.log(`Color: ${document.querySelector(".color:checked").id}`);
  console.log(`Material: ${window.selectedMaterial}`);
  console.log(`Quantity: ${quantityInput.value}`);
});

//MODAL WINDOW
window.onload = function () {
  document.getElementById("modal-container").style.display = "block";
};

document.getElementById("close-button").addEventListener("click", function () {
  document.getElementById("modal-container").style.display = "none";
});

const modalBtn = document.querySelector("#subscribe-button");
modalBtn.addEventListener("click", function () {
  var email = document.getElementById("email-input").value;
  console.log(`Email: ${email}`);
});
