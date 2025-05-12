const countDisplay = document.getElementById("count");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const sound = document.getElementById("click-sound");

let count = parseInt(localStorage.getItem("countValue")) || 0;

function updateDisplay() {
  // h2 display
  countDisplay.textContent = count;

  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "gray";
  }

  // adding count to local storage
  localStorage.setItem("countValue", count);

  playSound();
  animateCount();
}

// sound
function playSound() {
  sound.currentTime = 0;
  sound.play();
}

// animation
function animateCount() {
  countDisplay.classList.add("animate");
  setTimeout(() => {
    countDisplay.classList.remove("animate"), 200;
  });
}

increaseBtn.addEventListener("click", () => {
  count = count + 1;
  updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
  count = count - 1;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

updateDisplay();
