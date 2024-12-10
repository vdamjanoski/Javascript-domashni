class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
        const showDiv=document.getElementById("showDiv");

  
      showDiv.innerHTML+=`<div class="bankCards">
            <div>Account number: ${accountNumber}</div>
            <div>Starting balance: $${balance}</div>
            <label for="search"><input type="search" id="searchInput"></label>
            <label for="button1"><button onclick="myBankAccount.deposit(searchInput.value)">Deposit</button></label>
            <label for="button2"><button onclick="myBankAccount.withdraw(searchInput.value)">Withdraw</button></label>
            <div class="balanceDiv" style="display: none;">Your balance is: $${balance}</div>
            </div>`;
    }
  
  
    deposit(amount) {
      this.balance += amount;
      console.log(parseInt(this.balance))
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
  
  const myBankAccount = new BankAccount("12371674", 500);
  const yourBankAccount = new BankAccount("125234", 12312300);
  