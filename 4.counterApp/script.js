const countDisplay = document.getElementById("count");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

// sound
const clickSound = document.getElementById("click-sound");

/* “Try to get the saved counter value from localStorage, turn it into a number — and if that fails, just start at 0.” */
let count = parseInt(localStorage.getItem("counterValue")) || 0;

function updateDisplay() {
  countDisplay.textContent = count;
  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "gray";
  }
  localStorage.setItem("counterValue", count); // save to storage
  animateCount();
  playSound();
}

// Sound
function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

// animation
function animateCount() {
  countDisplay.classList.add("animate");
  setTimeout(() => countDisplay.classList.remove("animate"), 200);
}

increaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

updateDisplay();
