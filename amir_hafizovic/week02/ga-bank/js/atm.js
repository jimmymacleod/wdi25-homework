console.log('connected');



const atmAcc =
  {checking: 0, savings: 0};

  console.log('Savings balance: $' + atmAcc['savings']);
  console.log('Checking balance: $' + atmAcc['checking']);

const deposit = function(account, amount) {
  console.log('######', typeof amount);
  sum = atmAcc[account] + amount;
  console.log(account,'deposited $' + amount);
  atmAcc[account] = sum;
  //console.log(account + ' balance: $' + sum);
};
// deposit('checking', 30);
// deposit('savings', 50);

const withdraw = function(account, amount) {
  if (account === 'savings' && atmAcc['savings'] >= amount){
      console.log('executed');
      sum = atmAcc['savings'] - amount;
      console.log(account,'debited $' + amount);
      atmAcc['savings'] = sum;
      console.log('balance: $' + sum);
  }
  if (account === 'checking' && atmAcc['checking'] >= amount) {
      console.log('executed0');
      sum = atmAcc['checking'] - amount;
      console.log(' checking debited $' + amount);
      atmAcc['checking'] = sum;
      console.log('balance: $' + sum);
  }
    else if (account === 'checking' && (atmAcc['checking'] + atmAcc['savings']) >= amount){
      console.log('executed1');
      let sum = amount - atmAcc['checking'];
      atmAcc['checking'] = 0;
      sum = atmAcc['savings'] - sum;
      atmAcc['savings'] = sum;
      console.log(atmAcc['savings']);
    }
  else {
    console.log(account + ' has insufficient funds');
  }
};
//withdraw('checking', 30);
//withdraw('savings', 5);

  //console.log('Savings balance: $' + atmAcc['savings']);
  //console.log('Checking balance: $' + atmAcc['checking']);

  $(document).ready(function(){


    $('input#checking-deposit').on('click', function(){
      deposit('checking', parseFloat($('#checking-amount').val()));
      console.log('Checking balance: $' + atmAcc['checking']);
      $('#checking-balance').html(`$${atmAcc['checking']}`);
      $('#savings-balance').html(`$${atmAcc['savings']}`);
      if (atmAcc['checking'] === 0){
        $('#checking .balance').addClass("red");
      }
      else {
        $('#checking .balance').removeClass("red");
      }
    });

    $('input#checking-withdraw').on('click', function(){
      withdraw('checking', parseFloat($('#checking-amount').val()));
      console.log('Checking balance: $' + atmAcc['checking']);
      $('#checking-balance').html(`$${atmAcc['checking']}`);
      $('#savings-balance').html(`$${atmAcc['savings']}`);
      if (atmAcc['checking'] === 0){
        $('#checking .balance').addClass("red");
      }
      else {
        $('#checking .balance').removeClass("red");
      }
    });

    $('input#savings-deposit').on('click', function(){
      deposit('savings', parseFloat($('#savings-amount').val()));
      console.log('Saving balance: $' + atmAcc['savings']);
      $('#savings-balance').html(`$${atmAcc['savings']}`);
      $('#checking-balance').html(`$${atmAcc['checking']}`);
      if (atmAcc['savings'] === 0){
        $('#savings .balance').addClass("red");
      }
      else {
        $('#savings .balance').removeClass("red");
      }
    });

    $('input#savings-withdraw').on('click', function(){
      withdraw('savings', parseFloat($('#savings-amount').val()));
      console.log('Savings balance: $' + atmAcc['savings']);
      $('#savings-balance').html(`$${atmAcc['savings']}`);
      $('#checking-balance').html(`$${atmAcc['checking']}`);
      if (atmAcc['savings'] === 0){
        $('#savings .balance').addClass("red");
      }
      else {
        $('#savings .balance').removeClass("red");
      }
    });

    if (atmAcc['checking'] === 0){
      $('#checking .balance').addClass("red");
    }
    if (atmAcc['savings'] === 0){
      $('#savings .balance').addClass("red");
    }

    $('input#chris').on('click', function(){
      deposit('savings', 1000000);
      console.log('Checking balance: $' + atmAcc['checking']);
      $('#checking-balance').html(`$${atmAcc['checking']}`);
      $('#savings-balance').html(`$${atmAcc['savings']}`);
      $('body').addClass('bg').append('<section id="snow"></section>');
      $('body').append('<img id="santa" src="img/santa.gif" style="position:absolute">');
      /////////////////////////KITTY WALK////////////////////////////////

      let cat = document.getElementById('santa');
      let returnKitty;
      let walkKitty;
      cat.style.left = '0px';
      cat.style.transform = 'scaleX(-1)';
      //cat.style.width = '296'

      let kittyStart = function(){
        let oldLeft = parseInt(cat.style.left);

        if ((oldLeft + 296) > window.innerWidth) {
          console.log('executed');
          cat.style.transform = 'scaleX(1)';
          window.clearInterval(walkKitty);

          returnKitty = window.setInterval(walkBack, 100);
          // if (parseInt(cat.style.left) < 500){

          // }
        }
        // Walking right
        let newLeft = oldLeft + 10;
        cat.style.left = newLeft + 'px';
      };

      walkKitty = window.setInterval(kittyStart, 100);

      const walkBack = function() {
        if (parseInt(cat.style.left) < 0){
          console.log('executed1');
          window.clearInterval(returnKitty);
          cat.style.transform = 'scaleX(-1)';
          console.log('executed3');
          walkKitty = window.setInterval(kittyStart, 100);

              console.log('executed4');
              //window.clearInterval(kittyStart);
              // cat.style.transform = 'scaleX(1)';
              // walkKitty = window.setInterval(kittyStart, 100);

        }


        // Walking left
        let oldLeft = parseInt(cat.style.left);
        let newLeft = oldLeft - 10;
        cat.style.left = newLeft + 'px';
          console.log('executed2');
      };
      ///////////////////end christmas bonus///////////////////
    });

  });
