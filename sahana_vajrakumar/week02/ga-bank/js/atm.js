$(document).ready(function() {

  $("#alert").hide();
  $("#newAlert").hide();

  let bank = {

    bankTotalBalance: 0,

    accounts: {
      check: 0,
      savings: 0
    },



    totalBalance: function() {

      this.bankTotalBalance = this.accounts.check + this.accounts.savings;
      if (this.bankTotalBalance === 0) {
        $("#checking-balance").css('background-color', 'red');
        $("#savings-balance").css('background-color', 'red');

      } else {
        $("#checking-balance").css('background-color', 'grey');
        $("#savings-balance").css('background-color', 'grey');
      }
      return this.bankTotalBalance;
    },

    validInput: function(amount) {
      if (isNaN(amount)) {
        $("#alert").show();
        return false;

      } else if (amount <= 0) {
        $("#alert").show();
        return false;
      } else {
        $("#alert").hide();
        return true;
      }
    },


    deposit: function(type, amount) {

      $("#newAlert").hide();

      let isValid = this.validInput(amount);

      if (isValid) {
        this.accounts[type] = this.accounts[type] + amount;
        this.totalBalance();

      }
      return this.accounts[type];

    },

    withdraw: function(type, amount) {

      $("#newAlert").hide();

      let isValid = this.validInput(amount);
      if (isValid) {
        if (amount < this.accounts[type]) {

          this.accounts[type] = this.accounts[type] - amount;
          console.log(this.accounts[type]);
        } else if (amount >= this.accounts[type] && amount <= this.totalBalance()) {
          let remainingAmount = amount - this.accounts[type];
          amount = this.accounts[type];
          this.accounts[type] = this.accounts[type] - amount;

          if (type === "check") {
            this.accounts["savings"] = this.accounts["savings"] - remainingAmount;
            $('#savings-balance').html(`$ ${this.accounts.savings}`);
          } else {
            this.accounts["check"] = this.accounts["check"] - remainingAmount;
            $('#checking-balance').html(`$ ${this.accounts.check}`);
          };

        } else {
          $("#newAlert").show();

        }
        this.totalBalance();

      }
      return this.accounts[type];
    }
  }

  $("#savings-balance").html(`$ ${bank.accounts.savings}`);
  $("#checking-balance").html(`$ ${bank.accounts.check}`);
  bank.totalBalance();

  $('#savings-deposit').click(function() {

    $('#savings-balance').html(`$ ${bank.deposit("savings", parseInt($('#savings-amount').val()))}`);

  });

  $('#checking-deposit').click(function() {

    $('#checking-balance').html(`$ ${bank.deposit("check", parseInt($('#checking-amount').val()))}`);

  });

  $('#savings-withdraw').click(function() {

    $('#savings-balance').html(` $ ${bank.withdraw("savings", parseInt($('#savings-amount').val()))}`);

  });

  $('#checking-withdraw').click(function() {

    $('#checking-balance').html(` $ ${bank.withdraw("check", parseInt($('#checking-amount').val()))}`);

  });
});


// bank.deposit("savings" , 60);
