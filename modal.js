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
