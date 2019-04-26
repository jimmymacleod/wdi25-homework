//background image for bank to make it more attractive

console.log(`In JS file`);

$(document).ready(function(){
console.log('DOM loaded');
  const $image_of_bg = $('<div id="bg_image">');
  $image_of_bg.appendTo('body');

$('body').css({
  'background-image': "url('img/bank_bg_img.jpg')",
  'background-repeat': 'no-repeat',
  'background-size': 'cover',
  'margin': '0px'
});

let moneyInBankSavings = 0;
let moneyInBankCheque = 0;

///////////// DEPOSIT MONEY ////////////////////
//If deposit button is clicked, take amount entered in input field
//and
//call the deposit money function in bank.js
$('#checking-deposit').on('click', function(){
  let userInputDepositAmount = $('#checking-amount').val();
  console.log(`You have deposited \$${userInputDepositAmount}`);
  theBigBank.depositMoney('Cheque', parseFloat(userInputDepositAmount));
  moneyInBankCheque = theBigBank.totalAmtInCheque();
  $('#checking-balance').html(`\$${moneyInBankCheque}`);

});

//If deposit button is clicked, take amount entered in input field
//and
//call the deposit money function in bank.js
//??Can use same 'userInputDepositAmount' variable since its local to each function???
$('#savings-deposit').on('click', function(){
  let userInputDepositAmount = $('#savings-amount').val();
  console.log(`You have deposited \$${userInputDepositAmount}`);
  theBigBank.depositMoney('Savings', parseFloat(userInputDepositAmount));
  moneyInBankSavings = theBigBank.totalAmtInSavings();
  $('#savings-balance').html(`\$${moneyInBankSavings}`);

});


///////////// WITHDRAW MONEY ////////////////////

//If withdraw button is clicked, take amount entered in input field
//and
//call the withdraw money function in bank.js
$('#checking-withdraw').on('click', function(){
  let userInputWithdrawAmount = $('#checking-amount').val();

  let chkMoney = theBigBank.totalAmtInCheque() - userInputWithdrawAmount;
  let checkTotMoney = theBigBank.totalAmtInBank() - userInputWithdrawAmount;
  console.log(`HERE1:${chkMoney} , ${checkTotMoney}`);

  //If total money is NOT sufficient
  if(checkTotMoney<0){
    //Ignoring transaction by returning. Does not perform below conditions
    return;
  }

  //If total money is sufficient & cheque money NOT sufficient
  if( chkMoney < 0){
    //if user withdraws more than exists from checking account
    moneyToDrawFromSavings = theBigBank.totalAmtInCheque() - userInputWithdrawAmount;
    moneyToDrawFromSavings = Math.abs(moneyToDrawFromSavings);
    userInputWithdrawAmount -= moneyToDrawFromSavings;//for cheque


    console.log(`HERE:${moneyToDrawFromSavings} , ${userInputWithdrawAmount}`);

    theBigBank.withdrawMoney('Savings', parseFloat(moneyToDrawFromSavings));
    let moneyInBankSavings = theBigBank.totalAmtInSavings();
    $('#savings-balance').html(`\$${moneyInBankSavings}`);

  }
  console.log(`You have withdrawn \$${userInputWithdrawAmount}`);
  theBigBank.withdrawMoney('Cheque', parseFloat(userInputWithdrawAmount));
  moneyInBankCheque = theBigBank.totalAmtInCheque();
  $('#checking-balance').html(`\$${moneyInBankCheque}`);



});

//If withdraw button is clicked, take amount entered in input field
//and
//call the withdraw money function in bank.js
$('#savings-withdraw').on('click', function(){
  let userInputWithdrawAmount = $('#savings-amount').val();
  let chkMoney = theBigBank.totalAmtInSavings() - userInputWithdrawAmount;
  if( chkMoney < 0){
    //Ignoring transaction by returning. Does not perform below conditions
    return;
  }
  console.log(`You have withdrawn \$${userInputWithdrawAmount}`);
  theBigBank.withdrawMoney('Savings', parseFloat(userInputWithdrawAmount));
  moneyInBankSavings = theBigBank.totalAmtInSavings();
  $('#savings-balance').html(`\$${moneyInBankSavings}`);
});

//$currAmtInCheque  = parseFloat($('#checking-balance').html());

//If account is < 0
$('#savings-withdraw, #checking-withdraw').on('click', function(){
  let currAmtInBankSav = theBigBank.totalAmtInSavings();
  let currAmtInBankChe = theBigBank.totalAmtInCheque();


  if((currAmtInBankSav > 0 && currAmtInBankSav <10) ||
    (currAmtInBankChe > 0 && currAmtInBankChe <10)){
      $('body').css({
         'background-image': 'url("img/yougotnomoney.jpeg")',
         'background-position': 'center',
         'background-size': '800px 800px'

    });
  }

  console.log(`ATM>JS: ${currAmtInBankSav}  ${currAmtInBankChe}`)
  if( currAmtInBankSav <= 0 || currAmtInBankChe <=0) {
    $('body').css({
       'background-color' : "red",
       'background-image': ''
    });
    $('#title').css({
      'color': 'black'
    });
  }
});
//If account is > 0
$('#savings-deposit, #checking-deposit').on('click', function(){
  let currAmtInBank = theBigBank.totalAmtInBank();
  console.log(`ATM>JS: ${currAmtInBank}`)
  if(currAmtInBank > 0) {
    $('body').css({
       'background-image': "url('img/bank_bg_img.jpg')"
    });
  }
});

//If user withdraws more than amount that exists
$('#savings-withdraw, #checking-withdraw').on('click', function(){
  moneyInBankSavings = theBigBank.totalAmtInSavings();
  moneyInBankCheque = theBigBank.totalAmtInCheque();
});

});//document.ready
