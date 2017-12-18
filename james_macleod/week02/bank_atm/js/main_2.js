//Create an objec that represents a bank with one account.
//The bank will have the following methods:
//Display Balance
//Deposit
//Withdraw
//Display message
//Breakbank(?)

//The object has the following inputs:
//deposit.
//withdraw.
//These are operated by the #deposit #withdraw buttons with #amount input

$(document).ready(function() {
  console.log("working");

  let savingsBalance = 100;
  let creditBalance = 100;
  // const combinedAccounts = savingsBalance + creditBalance;
  let $savings = $("#savingsBalance");
  let $credit = $("#creditBalance");
  $savings = savingsBalance;
  $credit = creditBalance;
  $("#savingsBalance").html("$" + $savings);
  $("#creditBalance").html("$" + $credit);
  let $message = $(".message>h2");
  let amount;

  let creditLimit = 100;

  console.log("working");

  // code to toggle deposit and withdraw buttons
  const $deposit = $("#deposit");
  const $withdraw = $("#withdraw");
  $deposit.click(function() {
    $deposit.toggleClass("clicked");
    if ($withdraw.hasClass("clicked")) {
      $withdraw.toggleClass("clicked");
    }
  });
  $withdraw.click(function() {
    $withdraw.toggleClass("clicked");
    if ($deposit.hasClass("clicked")) {
      $deposit.toggleClass("clicked");
    }
  });

  let $amount = $("#amount").val();
  $("p").text($amount);

  //get the amount described through the input

  $("#amount")
    .keyup(function() {
      amount = $(this).val();
    })
    .keyup();

  //Create the event handlers for the buttons

  //On clicking the #confirm IF the deposit in clicked, take the input from #amount and add to savingsBalance,

  //else if withdraw is clicked, if the [savingsBalance = amount], withdraw from savingBalance, else check combinedAccounts

  let theBank = {
    account: {
      name: "Frank Enstien",
      savingsBalance: savingsBalance,
      creditBalance: creditBalance
    },

    action: function() {
      if ($deposit.hasClass("clicked")) {
        if ($credit < creditLimit) {
          $credit += parseInt(amount);
          $("#creditBalance").html("$" + $credit);
        } else {
          $savings += parseInt(amount);
          $("#savingsBalance").html("$" + $savings);
          console.log($savings);
        }
      }
      if ($withdraw.hasClass("clicked")) {
        if (amount > $savings) {
          if (amount > $credit) {
            $message.html("deadbeat");
            $(".container").css("background-color", "rgba(221, 43, 43, 0.7)");
            setTimeout(function() {
              $(".container").css("background-color", "rgba(0, 0, 0, 0.5)");
            }, 200);
          } else {
            let deficit = amount - $savings;
            $savings = 0;
            $credit -= deficit;
            $("#savingsBalance").html("$" + $savings);
            $("#creditBalance").html("$" + $credit);
          }
        } else {
          $savings -= parseInt(amount);
          $("#savingsBalance").html("$" + $savings);
          console.log($savings);
        }
      }
      if ($savings > 100) {
      }
    },

    animate: function() {
      const animate = function(element) {
        element.removeClass("animate-down");
        setTimeout(function() {
          element.addClass("animate-down");
        }, 3000);
      };
      if ($savings >= 3500) {
        $container = $(".container");
        $container.addClass("money");
        setTimeout(function() {
          $container.removeClass("money");
        }, 3000);
      }
      if ($savings >= 2500 && $savings < 3500) {
        $ani_6 = $("#ani_6");
        animate($ani_6);
        $message.html("Rolling in it!");
      }
      if ($savings >= 1500 && $savings < 2500) {
        $ani_5 = $("#ani_5");
        animate($ani_5);
        $message.html("Got to spend it to make it!");
      }
      if ($savings >= 1000 && $savings < 1500) {
        $ani_4 = $("#ani_4");
        animate($ani_4);
        $message.html("Making it rain.");
      }
      if ($savings >= 600 && $savings < 1000) {
        $ani_3 = $("#ani_3");
        animate($ani_3);
        $message.html("Things are are looking up.");
      }
      if ($savings >= 300 && $savings < 600) {
        $ani_2 = $("#ani_2");
        animate($ani_2);
        $message.html("Meh, I make more in a day.");
      }
      if ($savings >= 100 && $savings < 300) {
        $ani_1 = $("#ani_1");
        animate($ani_1);
        $message.html("Is that it?");
      }
    },
    creditBalance: function() {
      const $plus = $("#plus");
      $plus.on("click", function() {
        creditLimit += 10;
        console.log(creditLimit);
        let $creditLimit = $("#credit-limit");
        $creditLimit.text($creditLimit);
      });
    }
  };

  //welcome message

  const $name = $("h3#name");
  $name.html(theBank.account.name);
  console.log(theBank.account.name);

  let $confirm = $("#confirm");
  $confirm.on("click", theBank.action);

  $confirm.on("click", theBank.animate);

  theBank.creditBalance();
});
