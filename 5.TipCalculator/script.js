const bill = document.getElementById("amount");
const tipPercent = document.getElementById("tip");
const spanTipAmount = document.getElementById("tipAmount");
const spanTotal = document.getElementById("Total");
const btn = document.getElementById("calTip");

btn.addEventListener("click", () => {
  const billValue = parseFloat(bill.value);
  const tipValue = parseFloat(tipPercent.value);

  if (isNaN(billValue) || isNaN(tipValue)) {
    console.log("Enter valid values");
    return;
  }

  // calculation
  const tipAmount = (billValue * tipValue) / 100;
  const total = billValue + tipAmount;

  // spanTipAmount.textContent = tipAmount.toFixed(2);
  // spanTotal.textContent = total.toFixed(2);

  console.log("Tip:", tipAmount);
  console.log("Total:", total);
});
