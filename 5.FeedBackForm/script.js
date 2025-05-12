const nameEle = document.getElementById("name");
const emailEle = document.getElementById("email");
const msg = document.getElementById("txtMsg");
const submit = document.getElementById("btnSub");
const reset = document.getElementById("btnReset");
const thankMsg = document.getElementById("thank");
const displayResult = document.getElementById("result");

submit.addEventListener("click", () => {
  let nameValue = nameEle.value;
  let emailValue = emailEle.value;
  let msgValue = msg.value;

  if (!nameValue || !emailValue || !msgValue) {
    alert("Please fill in all fields!");
    return;
  }

  localStorage.setItem("name", nameValue);
  localStorage.setItem("email", emailValue);
  localStorage.setItem("message", msgValue);

  thankMsg.innerHTML = `<h1>Thank you for the Message</h1>`;
});

displayResult.textContent = `
Your Name is: ${nameValue}
Your Email is: ${emailValue}
Your Message is: ${msgValue}`;

reset.addEventListener("click", () => {
  nameEle.value = "";
  emailEle.value = "";
  msg.value = "";
  localStorage.clear();
  thankMsg.innerHTML = "";
  displayResult.textContent = "";
});
