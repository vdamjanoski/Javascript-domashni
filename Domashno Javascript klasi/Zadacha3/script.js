class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
        const showDiv=document.getElementById("showDiv");

  
      showDiv.innerHTML+=`<div class="bankCards">
            <div>Account number: ${accountNumber}</div>
            <div>Starting balance: $${balance}</div>
            <label for="search"><input type="number" id="searchInput"></label>
            <label for="button1"><button id="depositBtn">Deposit</button></label>
            <label for="button2"><button id="withdrawBtn">Withdraw</button></label>
            <div class="balanceDiv" style="display: none;">Your balance is: $${this.balance}</div>
            </div>`;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(this.balance)
    }
  
  
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
  
  
        console.log(`Successfully withdrawn $${amount}`);
      } else {
        console.log(`You want to withdraw $${amount}`);
        console.log(
          `But you have insufficient funds, your balance is: $${this.balance}`
        );
      }
    }
    
  
  
    displayBalance() {
      console.log(`Your balance is: $${this.balance}`);
    }
    
  } 
  
  const myBankAccount = new BankAccount("12371674", parseInt(500));
  
  const depositBtn = document.getElementById("depositBtn");

  depositBtn.addEventListener("click", () => {
   myBankAccount.balance+=parseInt(searchInput.value);
   showDiv.innerHTML+=`<div>Your new balance is $${(myBankAccount.balance)}!</div>`;
})

const withdrawBtn = document.getElementById("withdrawBtn");

  withdrawBtn.addEventListener("click", () => {
    if (myBankAccount.balance<searchInput.value){
        showDiv.innerHTML+=`<div>Insufficient balance!</div>`;
    }else{
        myBankAccount.balance-=searchInput.value;
        showDiv.innerHTML+=`<div>Your new balance is $${(myBankAccount.balance)}!</div>`;
    }
})