let gaBank = {

  // let checkingAccount: ,
  // let savingsAccount: ,

}


$(document).ready(function(){
console.log('DOMMMMMMMMMM');
const $checkingBalance = $('#checking-balance');
const $checkingAmount = $('#checking-amount');
const $checkingDeposit = $('#checking-deposit');
const $checkingWithdraw = $('#checking-withdraw');

const $savingsBalance = $('#savings-balance');
const $savingsAmount = $('#savings-amount');
const $savingsDeposit = $('#savings-deposit');
const $savingsWithdraw = $('#savings-withdraw');

let currentBalance = 0;

/////// checking account

// $checkingAmount.on('click', function(){
//   const amount = $(this).val();
//   console.log(`${amount}`);
//   //call function
// });

// $checkingAmount.on('keyup', function($checkingInput){// checking input text
//
//   $checkingInput = $(this).val();
//   if(isNaN($checkingInput)){
//     alert(`${$checkingInput} is not a number`);
//     return;
//   } else {
//     // call checkingDeposit button-click event to add input amount to balance
//     // console.log(`the input is ${$checkingInput}`);
//     $checkingDeposit.on('click', function(){
//       let currentBalance = parseFloat($checkingBalance.html());
//
//       $checkingBalance.html(  currentBalance + $checkingAmount.val() )//have to convert this to int or a float as it is currently showing as string
//
//       // $currentBalance.html(`$${$checkingInput}`)
//       // $checkingBalance.html(`$${$checkingInput}`)
//
//     });
//
//   }
// });

$checkingDeposit.on('click', function(){
  let deposit = $checkingAmount.html();
  debugger;
  console.log(`${deposit}`)
  currentBalance = parseFloat($checkingBalance.html() + deposit);
  $checkingBalance.html(  currentBalance + $checkingAmount.val() )//have to convert this to int or a float as it is currently showing as string

});

$checkingWithdraw.on('click', function(){
  const withdraw = $(this).val();
  console.log(`${withdraw}`);
  //call function
});



//////// savings account

$savingsAmount.on('keyup', function(){// savings input text
    const value = $(this).val();
    if(isNaN(value)){
      alert(`${value} is not a number`);
      return;
    } else {
      console.log(`the input is ${value}`);
    }
});

$savingsDeposit.on('click', function(){
  const savDeposit = $(this).val();
  console.log(`${savDeposit}`)

});

$savingsWithdraw.on('click', function(){
  const savWithdraw = $(this).val();
  console.log(`${savWithdraw}`)
});
















});
