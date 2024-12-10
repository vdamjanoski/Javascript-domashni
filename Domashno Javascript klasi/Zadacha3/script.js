class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
        const showDiv=document.getElementById("showDiv");

  
      showDiv.innerHTML+=`<div class="bankCards">
            <div>Account number: ${accountNumber}</div>
            <div>Starting balance: $${balance}</div>
            <label for="search"><input type="search" id="searchInput"></label>
            <label for="button1"><button>Deposit</button></label>
            <label for="button2"><button>Withdraw</button></label>
            <div class="balanceDiv" style="display: none;">Your balance is: $${this.balance}</div>
            </div>`;
    }
  
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited: $${amount}`);
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
  