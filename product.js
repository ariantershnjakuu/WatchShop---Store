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

//PRODUCTS JSON
const productContainer = document.getElementById("product-container");

function renderProducts(products) {
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    let price;
    if (product.newPrice) {
      price = `<p class="product-price">
        <span class="original-price">$${product.originalPrice}</span>
        <span class="new-price">$${product.newPrice}</span>
        <span class="percentage-off">${product.percentageOff}% off</span>
      </p>`;
    } else {
      price = `<p class="product-price">
        <span class="new-price">$${product.originalPrice}</span>
      </p>`;
    }

    productCard.innerHTML = `
    <input type="checkbox" name="checbox" id="smartwatch-check" />
    <img src="${product.images[0]}" alt="${product.name}" class="product-image">
      <h2 class="product-name">${product.name}</h2>
      ${price}
      <div class="product-rating">
        <span class="product-color ${product.color}"></span>
        </div>
      <p class="product-description">${product.description}</p>
    `;

    productContainer.appendChild(productCard);
  });
}

fetch("products.json")
  .then((response) => response.json())
  .then((products) => {
    renderProducts(products);
  });

const colorForm = document.querySelector("#color-filter");
colorForm.addEventListener("change", (event) => {
  const color = event.target.value;
  fetch("products.json")
    .then((response) => response.json())
    .then((products) => {
      renderProducts(
        color === "all"
          ? products
          : products.filter((product) => product.color === color)
      );
    });
});

// CHECKBOX VALIDATION
function calculateTotal() {
  let total = 0;
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((productCard) => {
    const checkbox = productCard.querySelector("input[type='checkbox']");
    if (checkbox.checked) {
      const priceElement = productCard.querySelector(".new-price");
      const price = parseFloat(priceElement.textContent.substring(1)); // remove the '$' and parse the price as a float
      total += price;
    }
  });
  console.log(`Total: $${total.toFixed(2)}`);
}

const checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", calculateTotal);
});

productContainer.addEventListener("change", (event) => {
  if (event.target.type === "checkbox") {
    calculateTotal();
  }
});
