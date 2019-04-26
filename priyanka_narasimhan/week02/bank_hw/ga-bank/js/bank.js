/*
1 bank
array of accounts
accounts ----- objects

methods
->add accounts() - add new account to array of accounts
->totalMoney () - Sum of money in all accounts
*/




//BASIC ACCOUNT OBJECT
const theBigBank = {

    //All accounts in cartForParty
    //Re-using code.
    //But here only one account is savings and one is cheque


  allAccounts : [],

  accdetails : {
              accName    : "",
              accBalance : 0,
              },


  //Total amount in bank function - returns total sum of all accounts i.e, savings + cheque
   totalAmtInBank : function(){
    var sum = 0;
    console.log(` initial sun:  ${sum}  ${parseFloat(this.allAccounts[0].accBalance)}`);
    if (this.allAccounts.length === 0) {
    } else {
    for( let i = 0; i < this.allAccounts.length; i++ ) {
      sum += parseFloat(this.allAccounts[i].accBalance);
      console.log(`totalamtinbank: ${this.allAccounts.length}, ${this.allAccounts[i].accBalance}`);
      }
    }
    console.log(` Total MONEY in the bank is ${sum}`);
    return sum;
  },


  //Adding account
   addAccount : function(newAccount) {
    console.log(`Adding new account`);
    var newTotalSumInBank = 0;
    this.allAccounts.push(newAccount);
    this.totalAmtInBank();
  },



  depositMoney : function(name , depAmt){
    console.log(`Money deposited is ${depAmt} in ${name}`);
    for(var i=0; i<this.allAccounts.length;i++){
      if(this.allAccounts[i].accName === name){
        this.allAccounts[i].accBalance += depAmt;
      }
    }
    console.log(`${this.allAccounts[0].accBalance}`);
    this.totalAmtInBank();

    //return this.allAccounts[i].accBalance;
  },

// add two inputs for withdrawMoney function - one for the account name and another for the amount
  withdrawMoney : function(name, withdrawAmt){
    console.log(`Money withdrawn is ${withdrawAmt}`);
    for(var i=0; i<this.allAccounts.length;i++){
      if(this.allAccounts[i].accName === name){
        this.allAccounts[i].accBalance -= withdrawAmt;
      }
    }
    this.totalAmtInBank();

    //return this.allAccounts[i].accBalance;
  },

  totalAmtInSavings : function(){
   var sumSavings = 0;
   sumSavings = parseFloat(this.allAccounts[0].accBalance);
   console.log(` Total MONEY in Savings is ${sumSavings}`);
   return sumSavings;
 },

 totalAmtInCheque : function(){
  var sumCheque = 0;
  //sumCheque = parseFloat(this.allAccounts.Savings.accBalance);?????? check why not working

  sumCheque = parseFloat(this.allAccounts[1].accBalance);
  console.log(` Total MONEY in Cheque is ${sumCheque}`);
  return sumCheque;
}

};


//Adding cheque and savings account with zero balance
theBigBank.addAccount({accName: 'Savings', accBalance: 0});
theBigBank.addAccount({accName: 'Cheque', accBalance: 0});
