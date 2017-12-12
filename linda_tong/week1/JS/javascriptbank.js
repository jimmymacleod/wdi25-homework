// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

const bank = [
  {
    name: 'Linda',
    currentBalance: 123.45
  },
  {
    name: 'Ben',
    currentBalance: 987.65
  }
];


const addNewAccount = function(newAccountName, openingBalance) {

  let newAccount = {
  name: newAccountName,
  currentBalance: openingBalance
  }

  bank.push(newAccount);
};

addNewAccount('Sara', 222.22);
addNewAccount('Lucky', 888.88)
console.log(bank);


const showTotalBalance = function(accountList) {
  let totalBalance = 0;

  // let eachBalance = Object.values(accountList);
  // console.log('eachBalance:', eachBalance);

  for (let i = 0; i < accountList.length; i++) {
    const currentAccount = accountList[i];
    totalBalance += currentAccount.currentBalance;
      totalBalance = totalBalance + currentAccount.currentBalance;
    // console.log('currentAccount.currentBalance:', currentAccount.currentBalance);
  }

  return totalBalance;
};

let total = showTotalBalance( bank );
// total = total.toFixed(2);

console.log( total.toFixed());


// const changeBalance = function()

// const getAccount


// const showNewBalance = function()
