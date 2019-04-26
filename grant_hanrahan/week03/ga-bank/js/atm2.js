let checkingBalance = 0;
let savingsBalance = 0;

$(document).ready(function(){

console.log('DOMMMMMMMMMM');

$('#checking-deposit').on('click', depositChecking);
$('#checking-withdraw').on('click', withdrawChecking);

$('#savings-deposit').on('click', depositSavings);
$('#savings-withdraw').on('click', withdrawSavings);


function depositChecking(){
  currentAmount = parseFloat($('#checking-amount').val());// text input
  checkingBalance += currentAmount;
  $('#checking-balance').text(`$ ${checkingBalance}`);// balance onscreen

  return checkingBalance;
  console.log(typeof checkingBalance);
  bankOfGA();
}

function withdrawChecking(){
  currentAmount = parseFloat($('#checking-amount').val());//text input
  if( !( checkingBalance - currentAmount >= 0 )){
    window.alert('Declined!')
  } else {
  checkingBalance -= currentAmount;
  $('#checking-balance').text(`$ ${checkingBalance}`);//balance onscreen
  //function calcLeftover(){
      // if( checkingBalance - currentAmount <= 0){
      //    let overdraft = checkingBalance - currentAmount;
      //    return overdraft;
      //    let overdraftWithdrawal = savingsBalance - overdraft;
      //}
  }
  console.log(`${checkingBalance}`)
  bankOfGA();
}

function depositSavings(){
  currentAmount = parseFloat($('#savings-amount').val());//text input
  savingsBalance += currentAmount;
  $('#savings-balance').text(`$ ${savingsBalance}`);//balance onscreen
  return savingsBalance;
  bankOfGA();
}

function withdrawSavings(){
  currentAmount = parseFloat($('#savings-amount').val());//text input
  if( !(savingsBalance - currentAmount >= 0)){
    window.alert('Declined!')
  } else {
  savingsBalance -= currentAmount;
  $('#savings-balance').text(`$ ${savingsBalance}`);
  }
  return savingsBalance;
  bankOfGA();
}

function bankOfGA(){
  if( checkingBalance > 0){
    $('#content').css('background-image', 'url("https://media.giphy.com/media/3osxYamKD88c6pXdfO/giphy.gif")')
  }
  if(savingsBalance > 0){
    $('#content').css('background-image', 'url("https://media.giphy.com/media/3osxYamKD88c6pXdfO/giphy.gif")')
  }
  if( checkingBalance <= 0){
    $('#content').css('background-image', 'url("https://media.giphy.com/media/7uRH46wsNNK5a/giphy.gif")')
  }
  if( savingsBalance <= 0){
    $('#content').css('background-image', 'url("https://media.giphy.com/media/7uRH46wsNNK5a/giphy.gif")')
  }




}


//create a totalBalance variable
//each time a deposit is made, the amount is added to the totalBalance
//each time a withdrawal is madde, the amount is subtracted from totalBalance
//if the totalBalance

});
