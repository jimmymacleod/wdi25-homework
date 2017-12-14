// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

let bank = {

   accounts: [
      {name: "john" , currentBalance : 100 } ,
      {name: "mx" , currentBalance : 100 } ,
      {name: "david" , currentBalance : 100 }
    ],

   bankTotalBalance: 0,

    totalAmount:function(){
      for ( var i = 0; i < this.accounts.length; i++ ) {
   this.bankTotalBalance = this.bankTotalBalance + this.accounts[ i ].currentBalance;
  }
  console.log(`Total Bank Balance : ${this.bankTotalBalance}$`);
  },

  addNewAccount:function(newName , deposit){
    let userNameExists = false;
    for(i = 0 ; i < this.accounts.length ; i++){
      if(newName === this.accounts[i].name){
        userNameExists = true;
      };
    };
    if(userNameExists){

      console.log('account already exists');
      }else{
      this.accounts.push({ name:newName , currentBalance:deposit });
    };



  },
  withdraw:function(name , amount){
    let accountExists = false;
    for(i=0 ; i < this.accounts.length ; i++){
      if(name === this.accounts[i].name ){
        accountExists = true;
        if(amount < this.accounts[i].currentBalance){
          this.accounts[i].currentBalance = this.accounts[i].currentBalance - amount;
          console.log(`amount withdrawn from ${name} is ${amount}$ and the current balance is ${this.accounts[i].currentBalance}$`);
        }else{
          console.log('insufficient balance');
        }
      }
    }
    if(!accountExists){
      console.log('Account not found');
    }

  },
  deposit:function(name , amount){
    let accountExists = false;
    for(i=0 ; i < this.accounts.length ; i++){
      if(name === this.accounts[i].name ){
        accountExists = true;
          this.accounts[i].currentBalance = this.accounts[i].currentBalance + amount;
          console.log(`amount deposited to ${name} is ${amount}$ and the current balance is ${this.accounts[i].currentBalance}$`);

      }
    }
    if(!accountExists){
      console.log('Account not found');
  }
  },

  transfer:function(fromAccount , toAccount , transferAmount){
    let accountExists = false;
    for(i=0 ; i < this.accounts.length ; i++){
      if(fromAccount === this.accounts[i].name ){
        for(j=0 ; j < this.accounts.length ; j++){
        if(toAccount === this.accounts[j].name){
          accountExists = true;
          this.accounts[i].currentBalance = this.accounts[i].currentBalance - transferAmount;
          this.accounts[j].currentBalance = this.accounts[j].currentBalance + transferAmount;
          console.log(`The amount transfered from ${fromAccount} to ${toAccount} is ${transferAmount}$`); console.log(`current balance of ${fromAccount} is ${this.accounts[i].currentBalance}$ and ${toAccount} is ${this.accounts[j].currentBalance}$`);
        }
      }
      }
    }
    if(!accountExists){
      console.log('account not found');
    }
  }
};

bank.addNewAccount("XYZ" , 100);
bank.withdraw("david" , 10);

bank.deposit("john" , 10);
bank.transfer("john", "mx" , 20);
bank.totalAmount();
