// login page to transaction page
const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

// Deposit Event handler
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click", function () {
  const depositAmountNumber = getInput("depositAmount");
  updatedSpanText("currentDeposit", depositAmountNumber);
  updatedSpanText("currentBalance", depositAmountNumber);
  document.getElementById("depositAmount").value = "";
});

// Withdraw event handler

const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function () {
  const withdrawAmountNumber = getInput("withdrawAmount");
  updatedSpanText("currentWithdraw", withdrawAmountNumber);
  updatedSpanText("currentBalance", -1 * withdrawAmountNumber);
  document.getElementById("withdrawAmount").value = "";
});

// Function to get input
function getInput(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}
// function to update the current field
function updatedSpanText(id, number) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const total = number + currentNumber;
  document.getElementById(id).innerText = total;
}
