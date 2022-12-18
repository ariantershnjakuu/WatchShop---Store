// Get the submit button and the form fields
var submitBtn = document.querySelector(".contact-btn");
var nameField = document.querySelector("#name");
var emailField = document.querySelector("#email");
var mobileField = document.querySelector("#mobile");
var messageField = document.querySelector("#message");

// Attach a click event listener to the submit button
submitBtn.addEventListener("click", function () {
  // Get the user-provided data from the form fields
  var name = nameField.value;
  var email = emailField.value;
  var mobile = mobileField.value;
  var message = messageField.value;

  // Log the user-provided data to the console in the specified format
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Mobile: ${mobile}`);
  console.log(`Message: ${message}`);
});
