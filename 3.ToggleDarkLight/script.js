const btn = document.getElementById("toggleBtn");
const body = document.body;

btn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  btn.textContent = body.classList.contains("dark") ? "🌞" : "🌙";
});
