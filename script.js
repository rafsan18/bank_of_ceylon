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
  const depositAmount = document.getElementById("depositAmount").value;
  const depositAmountNumber = parseFloat(depositAmount);

  const currentDeposit = document.getElementById("currentDeposit").innerText;
  const currentDepositNumber = parseFloat(currentDeposit);

  const depositBalance = depositAmountNumber + currentDepositNumber;

  document.getElementById("currentDeposit").innerText = depositBalance;

  //   Adjusting Balance
  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const updatedBalance = depositAmountNumber + currentBalanceNumber;
  document.getElementById("currentBalance").innerText = updatedBalance;

  document.getElementById("depositAmount").value = "";
});
