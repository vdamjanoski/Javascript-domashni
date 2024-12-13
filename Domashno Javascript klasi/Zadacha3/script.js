class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    const showDiv = document.getElementById("showDiv");

    showDiv.innerHTML += `<div class="bankCards">
            <div>Account number: ${accountNumber}</div>
            <div>Starting balance: $${balance}</div>
            <label for="search"><input type="number" id="searchInput"></label>
            <label for="button1"><button id="depositBtn" onclick="deposit()">Deposit</button></label>
            <label for="button2"><button id="withdrawBtn" onclick="withdraw()">Withdraw</button></label>
            <label for="transactions"><button id="transactionBtn">Transactions</button></label>
            </div>`;
  }
}

const myBankAccount = new BankAccount("12371674", parseInt(500));

const depositBtn = document.getElementById("depositBtn");
function deposit() {
  myBankAccount.balance += parseInt(searchInput.value);
  showDiv.innerHTML += `<div><span>You deposited $${searchInput.value}</span> Your new balance is $${myBankAccount.balance}!</div>`;
}

const withdrawBtn = document.getElementById("withdrawBtn");
function withdraw() {
  if (myBankAccount.balance < searchInput.value) {
    showDiv.innerHTML += `<div>Insufficient balance!</div>`;
  } else {
    myBankAccount.balance -= searchInput.value;
    showDiv.innerHTML += `<div><span>You withdrawed $${searchInput.value} .</span> Your new balance is $${myBankAccount.balance}!</div>`;
  }
}
const transactionsDiv = document.getElementById("transactionsDiv");
