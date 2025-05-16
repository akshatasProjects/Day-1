const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");
const images = document.querySelectorAll(".gallery img");
const caption = document.getElementById("caption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

// Open modal and show clicked image
function openModal(index) {
  currentIndex = index;
  modal.style.display = "flex";
  modalImg.src = images[currentIndex].src;
  caption.textContent = images[currentIndex].alt || "No caption";
}

// Event listeners for image click
images.forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Navigate left
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openModal(currentIndex);
});

// Navigate right
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  openModal(currentIndex);
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
    if (e.key === "Escape") {
      modal.style.display = "none";
    } else if (e.key === "ArrowLeft") {
      prevBtn.click();
    } else if (e.key === "ArrowRight") {
      nextBtn.click();
    }
  }
});
