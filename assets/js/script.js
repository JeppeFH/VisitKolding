const showImageButton = document.getElementById("showImageButton");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("closeButton");

function closeOverlay() {
  overlay.classList.add("hidden");
}

showImageButton.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
});

closeButton.addEventListener("click", closeOverlay);
