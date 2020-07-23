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
  //   Getting input value and convert into number
  const depositAmount = document.getElementById("depositAmount").value;
  const depositAmountNumber = parseFloat(depositAmount);

  // Getting current value and convert into number
  const currentDeposit = document.getElementById("currentDeposit").innerText;
  const currentDepositNumber = parseFloat(currentDeposit);
  //Total Deposit and update current deposit
  const depositBalance = depositAmountNumber + currentDepositNumber;
  document.getElementById("currentDeposit").innerText = depositBalance;

  //   Adjusting Balance
  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const updatedBalance = depositAmountNumber + currentBalanceNumber;
  document.getElementById("currentBalance").innerText = updatedBalance;
  // to clear the input field after click
  document.getElementById("depositAmount").value = "";
});

// Withdraw event handler

const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function () {
  // Getting input value and convert into number
  const withdrawAmount = document.getElementById("withdrawAmount").value;
  const withdrawAmountNumber = parseFloat(withdrawAmount);

  // Getting current value and convert into number
  const currentWithdraw = document.getElementById("currentWithdraw").innerText;
  const currentWithdrawNumber = parseFloat(currentWithdraw);

  //Total Withdraw and updated current withdraw
  const totalWithdraw = withdrawAmountNumber + currentWithdrawNumber;
  document.getElementById("currentWithdraw").innerText = totalWithdraw;

  // Adjusting Balance
  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const updatedBalance = currentBalanceNumber - withdrawAmountNumber;
  document.getElementById("currentBalance").innerText = updatedBalance;

  document.getElementById("withdrawAmount").value = "";
});
